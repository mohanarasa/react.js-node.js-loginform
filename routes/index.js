var express         = require('express');
var router          = express.Router();
var axios           = require ('axios');
var SaveJoke        = require ('../models/save');

/* GET home page. */
// Get Homepage
router.get('/', ensureAuthenticated, function(req, res){


  axios.get('https://api.github.com/search/repositories?q={query}{&page,per_page,sort,order}')
    .then(function (response) {
      res.locals.msg = response.data.value.joke;
      console.log(response.data.value.joke);
      res.render('index',{msg:res.locals.msg});
    })
    .catch(function (error) {
      console.log(error);
    });
});

router.post('/save', function(req,res){
  var newJoke = SaveJoke({
    joke: req.body.joke
  });

  newJoke.save(function(err){
    if(err) throw err;
    console.log('joke created');
  });
  res.redirect('/');
});

function ensureAuthenticated(req, res, next){
    if(req.isAuthenticated()){
        return next();
    } else {

        res.redirect('/users/login');
    }
}


module.exports = router;
