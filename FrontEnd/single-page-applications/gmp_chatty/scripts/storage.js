'use-strict';

var Chatty = (function(chat){

  var allMessages = [];

  chat.setInitialStorage = function(messages){
    console.log('setInitialStorage running');
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

  // chat.getAllMessages = function(){
  //   console.log('getAllMessages running');
  //   return allMessages;
  // }

  chat.addToAllMessages = function(message, id){
    console.log('addToAllMessages running')
    var messageObj = {}
    var objKey = id;
    var value = message
    messageObj[objKey] = value;
    allMessages.unshift(messageObj);
    resetStorage(allMessages);
  }

  chat.removeFromAllMessages = function(id){
    console.log('removeFromArray running');
    var index = id.replace('message', '')
    allMessages.splice(index, 1);
    resetStorage(allMessages);
  }

  chat.clearAllMessages = function(){
    console.log('clearStorage running');
    allMessages = [];
  }

  function resetStorage(modifiedArray){
    console.log('resetStorage running')
    console.log(modifiedArray);
    allMessages = [];
    for (var i = 0; i < modifiedArray.length; i++){
      for (var key in modifiedArray[i]){
        var messageObj = {}
        var objKey = `message${i}`;
        var value = `${modifiedArray[i][key]}`
        messageObj[objKey] = value;
        allMessages.push(messageObj);
      }
    }
    console.log(allMessages)
  }

  return chat;
})(Chatty || {});