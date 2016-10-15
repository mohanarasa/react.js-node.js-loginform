var express           = require('express');
var path              = require('path');
var favicon           = require('serve-favicon');
var logger            = require('morgan');
var cookieParser      = require('cookie-parser');
var bodyParser        = require('body-parser');
var bcryptjs          = require ('bcryptjs');
var flash             = require ('connect-flash');
var session           = require ('express-session');
var passport          = require ('passport');
var LocalStrategy     = require ('passport-local').Strategy;
var mongod            = require ('mongod');
var mongoose          = require ('mongoose');
var expressValidator  = require ('express-validator');
var routes            = require('./routes/index');
var users             = require('./routes/users');
var axios             = require ('axios');
var github = require("./routes/github");

mongoose.connect('mongodb://localhost/loginapp');
var db    = mongoose.connection;
var routes = require ('./routes/index');
var users = require ('./routes/users');
var app = express();

// view engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jsx');
app.engine('jsx', require('express-react-views').createEngine());

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
//https://www.npmjs.com/package/express-session


app.use(session({
  secret: 'secret',
  resave: true,
  saveUninitialized: true,

}));
//passport
app.use(passport.initialize());
  app.use(passport.session());


//expressValidator
  app.use(expressValidator({
  errorFormatter: function(param, msg, value) {
      var namespace = param.split('.'),

      root    = namespace.shift(),
      formParam = root;

    while(namespace.length) {
      formParam += '[' + namespace.shift() + ']';
    }
    return {
      param : formParam,
      msg   : msg,
      value : value
    };
  }
}));

app.use(flash());
//global vars
app.use(function(req,res,next){
  res.locals.success_msg = req.flash('success_msg');
  res.locals.error_msg = req.flash('error_msg');
  res.locals.error = req.flash('error');
  res.locals.user=req.user || null;
  next();
});



app.use('/', routes);
app.use('/users', users);
app.use('/git', github);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handlers

// development error handler
// will print stacktrace
if (app.get('env') === 'development') {
  app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
      message: err.message,
      error: err
    });
  });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
  res.status(err.status || 500);
  res.render('error', {
    message: err.message,
    error: {}
  });
});

//listening at port 2020
var appListen = function(){
  console.log('app is listening at port 2020');
};

app.listen(2020,appListen);

module.exports = app;
//ed3a0ce3c221bd0f1dda9a44d4f6acc3b0db5654 github repo key
