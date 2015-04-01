var models = require('./models/index.js');




module.exports = function(app, app_dir){

  var printStuff = function printStuff(){
    console.log("Stuff...");
    console.log($);
  }
  app.get('/messages', function(req,res){
    console.log('messages routes');
    res.render('index', {arrayValues:['sam','joe','steve']});
  });


  app.post('/newMessage', function(req, res){
    console.log("POSTED");
    console.log(req.body);
    var toSave = {body: req.body.message, tab: req.body.tab};
    var message = new models.Message(toSave);
    message.save(function(err){
      if(err){
        console.log(err)
      } else{
        console.log("message posted!");
      }
    });

    // console.log(req.params);
    // console.log(req.messages)
    res.send(["GOOD JOB SAM"]);
  });


  app.get('/allMessages/:tab', function(req,res){
    console.log("Getting all messages");
    console.log(req.params)
    var thisTab = req.params.tab

    models.Message.find({tab : thisTab}).
      exec(function(err, messages){
        if(err){
          console.log(err)
        } else{
          console.log(messages);
          var onlyMessages = messages.map(function(obj){
            return obj['body']
          })
          console.log('no error in all messages');
          res.render('index', {arrayValues: onlyMessages, forumName: thisTab});

        }
      })
  })

  app.get('/cars', function(req,res){

    res.send('Hello');
  })

}