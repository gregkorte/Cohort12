'use-strict';

var Chatty = (function(chat){
  var board = $('#messageBoard');

  chat.addMessage = function(message, id){
    console.log('addMessage running');
    Chatty.addToAllMessages(message, id);
    board.prepend(`<div id='id' class='message row'>${message}<input class='deleteBtn' type='button' value='Delete'></div>`);
  }

  chat.deleteMessage = function(element, id){
    console.log('deleteMessage running');
    Chatty.removeFromAllMessages(id);
    element.remove();
  }

  chat.readAllMessages = function(messages){
    console.log('readAllMessages running');
    board.append(`<div class='container'>`)
    for (var i = 0; i < messages.length; i++){
      for (var id in messages[i]){
        board.append(`<div id='message${i}' class='row'>${messages[i][id]}<input class='deleteBtn' type='button' value='Delete'></div>`);
      }
    }
    board.append(`</div>`)
    Chatty.loadDynamicEvents();
  }

  chat.clearMessages = function(){
    console.log('clearMessages running');
    Chatty.clearAllMessages();
    board.html('');
  }

  return chat;
})(Chatty || {});