'use-strict';

var Chatty = (function(chat){
  var board = $('#messageBoard');
  var clear = $('#clearBtn');

  chat.addMessage = function(message, id){
    console.log('addMessage running', id);
    console.log(board)
    Chatty.addToAllMessages(message, id);
    board.prepend(`<div id='message' class='row'><div class='message col-xs-10'>${message}</div><div class='col-xs-2'><input class='deleteBtn' type='button' value='Delete'></div></div>`);
    Chatty.loadDynamicEvents();
    checkClearBtnState();
  }

  chat.deleteMessage = function(element, id){
    console.log('deleteMessage running');
    console.log(element, id);
    Chatty.removeFromAllMessages(id);
    element.remove();
    checkClearBtnState();
  }

  chat.readAllMessages = function(messages){
    console.log('readAllMessages running');
    for (var i = 0; i < messages.length; i++){
      for (var id in messages[i]){
        board.append(`<div id='message${i}' class='row'><div class='message col-xs-10'>${messages[i][id]}</div><div class='col-xs-2'><input class='deleteBtn' type='button' value='Delete'></div></div>`);
      }
    }
    Chatty.loadDynamicEvents();
  }

  chat.clearMessages = function(){
    console.log('clearMessages running');
    Chatty.clearAllMessages();
    board.html('');
    checkClearBtnState();
  }

  function checkClearBtnState(){
    if (board.is(':empty')){
      clear.prop('disabled', true);
    } else {
      clear.prop('disabled', false);
    }
  }

  return chat;
})(Chatty || {});