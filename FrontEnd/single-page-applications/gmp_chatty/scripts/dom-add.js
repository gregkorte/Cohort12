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
    board.append(`<div class='container'>`)
    for (var i = 0; i < messages.length; i++){
      for (var id in messages[i]){
        board.append(`<div id='message${i}' class='row'>${messages[i][id]}<input class='deleteBtn' type='button' value='Delete'></div>`);
      }
    }
    board.append(`</div>`)
    Chatty.loadDynamicEvents();
  }

  return chat;
})(Chatty || {});