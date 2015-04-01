var mongoose = require('mongoose');

var MessageSchema = mongoose.Schema({
  body : String,
  tab : String
});

module.exports = {schema : mongoose.model('message', MessageSchema)};