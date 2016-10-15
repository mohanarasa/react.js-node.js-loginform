var mongoose = require('mongoose');


// User Schema
var UserSave = mongoose.Schema({
  joke: {
    type:String
  }
});

var User = module.exports = mongoose.model('SaveJoke', UserSave);
// mongoose is required as the save needs to be saved in the database.
// UserSave would be what the user has saved, module.exports, would save the joke. 
