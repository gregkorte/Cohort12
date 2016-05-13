'use-strict';

var Chatty = (function(chat){

  var allMessages = [];

  chat.setInitialStorage = function(messages){
    console.log('setStorage running');
    for (var i = 0; i < messages.length; i++){
      for (var key in messages[i]){
        var messageObj = {}
        var objKey = `message${i}`;
        var value = `${messages[i][key]}`
        messageObj[objKey] = value;
        allMessages.push(messageObj);
      };
    }
    Chatty.readAllMessages(allMessages);
  }

  chat.getAllMessages = function(){
    return allMessages;
  }

  function addToAllMessages(){
    var storage = allMessages;
    console.log(allMessages);
  }

  function removeFromAllMessages(id){
    console.log('removeFromArray running');
  }

  function clearAllMessages(){
    console.log('clearStorage running');
  }

  return chat;
})(Chatty || {});