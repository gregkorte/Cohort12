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
        key1 = `message${i}`;
        var messageObj = {};
        var value = messages[i][key];
        messageObj[key1] = value;
        allMessages.push(messageObj);
      };
    }
    console.log('B4 readAll', allMessages)
    Chatty.readAllMessages(allMessages);
  }

  chat.addToAllMessages = function(user, time, message){
    // console.log('addToAllMessages running');
    var messageObj = {
      'new': {
        'message': message,
        'user': user,
        'time': time
      }
    };
    allMessages.unshift(messageObj);
    chat.setStorage(allMessages);
  }

  chat.removeFromAllMessages = function(id){
    // console.log('removeFromArray running');
    var index = id.replace('message', '')
    allMessages.splice(index, 1);
    chat.setStorage(allMessages);
  }

  chat.editInAllMessages = function(target, id, message){
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
