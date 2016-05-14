'use-strict';

var Chatty = (function(chat){

  var allMessages = [];

  chat.setStorage = function(messages){
    console.log('setStorage running');
    allMessages = [];
    for (var i = 0; i < messages.length; i++){
      for (var key in messages[i]){
        var messageObj = {};
        var objKey = `message${i}`;
        var value = `${messages[i][key]}`;
        messageObj[objKey] = value;
        allMessages.push(messageObj);
      };
    }
    Chatty.readAllMessages(allMessages);
  }

  chat.addToAllMessages = function(message){
    console.log('addToAllMessages running');
    var messageObj = {};
    var objKey = 'new';
    var value = message
    messageObj[objKey] = value;
    allMessages.unshift(messageObj);
    chat.setStorage(allMessages);
  }

  chat.removeFromAllMessages = function(id){
    console.log('removeFromArray running');
    var index = id.replace('message', '')
    allMessages.splice(index, 1);
    chat.setStorage(allMessages);
  }

  chat.clearAllMessages = function(){
    console.log('clearStorage running');
    allMessages = [];
    chat.setStorage(allMessages);
  }

  chat.getAllMessages = function(){
    return allMessages;
  }

  return chat;
})(Chatty || {});