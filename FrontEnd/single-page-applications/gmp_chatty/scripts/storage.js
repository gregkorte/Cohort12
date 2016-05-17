'use-strict';

var Chatty = (function(chat){

  var users = {
    names: ["Xavier", "Joanna", "Mackenzie", "Gunter", "Iveta", "Sven"]
  };

  var allMessages = [];

  chat.setStorage = function(messages){
    // console.log('setStorage running');
    allMessages = [];
    for (var i = 0; i < messages.length; i++){
      for (var key in messages[i]){
        var messageObj = {};
        var objKey = key;
        var value = messages[i][key];
        messageObj[objKey] = value;
        allMessages.push(messageObj);
      };
    }
    Chatty.readAllMessages(allMessages);
  }

  chat.addToAllMessages = function(message){
    // console.log('addToAllMessages running');
    var messageObj = {};
    var objKey = 'new';
    var value = message
    messageObj[objKey] = value;
    allMessages.unshift(messageObj);
    chat.setStorage(allMessages);
  }

  chat.removeFromAllMessages = function(id){
    // console.log('removeFromArray running');
    var index = id.replace('message', '')
    allMessages.splice(index, 1);
    chat.setStorage(allMessages);
  }

  chat.editInAllMessages = function(target, id){
    // console.log('editInAllMessages running')
    var index = id.replace('message', '')
    allMessages[index][id] = target.textContent;
  }

  chat.clearAllMessages = function(){
    // console.log('clearStorage running');
    allMessages = [];
    chat.setStorage(allMessages);
  }

  chat.getAllMessages = function(){
    return allMessages;
  }

  Chatty.populateUsers(users.names);

  return chat;
})(Chatty || {});
