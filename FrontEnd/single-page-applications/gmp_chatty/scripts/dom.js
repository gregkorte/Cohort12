'use-strict';

var Chatty = (function(chat){
  var board = $('#messageBoard');

  chat.addMessage = function(id, message){
    console.log(id, message);
    Chatty.setStorage(message);
    board.prepend(`<div id='id' class='row'>${message}<input class='deleteBtn' type='button' value='Delete'></div>`);
  }

  chat.deleteMessage = function(element, id){
    Chatty.setStorage();
    element.remove();
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

  chat.clearMessages = function(){
    Chatty.setStorage();
    board.html('');
  }

  return chat;
})(Chatty || {});