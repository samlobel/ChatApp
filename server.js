var express = require('express')
var mongoose = require('mongoose')
var bodyParser = require('body-parser');
var models = require('./models/index.js');
var port = 3000
var MONGO_URI = 'mongodb://samlobel:samlobel@ds059821.mongolab.com:59821/chatstuff';



mongoose.connect(MONGO_URI);

mongoose.connection.on('connected', function () {
    console.log('Connected with Mongoose');
});

mongoose.connection.on('error',function (err) {
    console.log('Mongoose default connection error: ' + err);
});

mongoose.connection.on('disconnected', function () {
    console.log('Mongoose default connection disconnected');
});



var app = express()

app.use(bodyParser.urlencoded());



// View engine setup
app.set('views', __dirname + '/views');
app.set('view engine', 'jade');


app.use(express.static(__dirname + '/static/third-party'));
app.use(express.static(__dirname + '/static/first-party'));




require('./routes')(app, __dirname);

/*app.get('/', function(req, res){
  res.render('./index', {arrayValues : ['1','2','3','4']});
});
*/







var server = app.listen(port, function(){
  console.log("Now listening on port " + port);
});



