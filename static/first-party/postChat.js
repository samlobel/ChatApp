var printJQuery = function(){
  console.log($)
}

var postForm = function(thisID){
  var dataWeWant = $('[name="messageToPost"]').val()
  var toPost = {message: dataWeWant, tab:thisID};
  console.log(thisID);
  //var thisMessage = formData.message;
  //var toPost = {message : thisMessage};
  console.log("post form clicked")
  console.log(toPost)

  //console.log($('[name="messageToPost"]').val())
  $.ajax({
    method: 'POST',
    url: '/newMessage',
    data: toPost,
    dataType: 'json',
    success: function(good){
      console.log('good!');
      console.log(good);
      window.location.reload()
    },
    error: function(bad){

    }
  })
}

var getMessages = function(stuff){

  console.log("Messages Called")
  $.ajax({
    method: 'GET',
    url: '/allMessages',
    data: {},
    dataType: 'json',
    success: function(){
      console.log("Success on getMessages");
    }
  });
}


var switchPage = function(sent){
  console.log(sent);

  location.href = sent
}