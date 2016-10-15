// var express         = require('express');
// var axios           = require("axios");
// var router          = express.Router();
// 
// router.get('/git/search/:q', function(req, res){
// console.log('hello');
// axios.defaults.headers.common['Host'] = 'api.github.com';
//   // headers: {
//   //     'Host': 'api.github.com',
//   //     'Authorization': 'Basic ' + new Buffer(username + ':' + password).toString('base64')
//   // }
//
//   axios.get('https://api.github.com/search/repositories?q='+req.params.q+'&sort=stars&order=desc')
//     .then(function (response) {
//       console.log(response);
//     res.send(response);
//   })
//   .catch(function (error) {
//     console.log(error);
//     res.send(error);
//   });
// });
//
// function ensureAuthenticated(req, res, next){
//     if(req.isAuthenticated()){
//         return next();
//     } else {
//
//         res.redirect('/users/login');
//     }
// }
//
// module.exports = router;
