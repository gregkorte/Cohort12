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

  chat.getAllMessages = function(){
    console.log('getAllMessages running');
    return allMessages;
  }

  function addToAllMessages(){
    console.log('addToAllMessages running')
    var storage = allMessages;
    console.log(allMessages);
  }

  chat.removeFromAllMessages = function(id){
    console.log('removeFromArray running');
    var index = id.replace('message', '')
    allMessages.splice(index, 1);
    resetStorage(allMessages);
  }

  function clearAllMessages(){
    console.log('clearStorage running');
  }

  function resetStorage(modifiedArray){
    console.log('resetStorage running')
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