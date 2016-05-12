'use-strict';

var Chatty = (function(chat){
  var currMessage = [];
  var board = $('#messageBoard');

  chat.addMessage = function(id, message){
    console.log('addMessage running', id, message);
  }

  chat.deleteMessage = function(id){
    console.log('deleteMessages running');
  }

  chat.readAllMessages = function(messages){
    for (var i = 0; i < messages.length; i++){
      for (var id in messages[i]){
        board.append(`<div>${messages[i][id]}</div>`);
      }
    }
  }

  return chat;
})(Chatty || {});