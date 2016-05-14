'use-strict';

var Chatty = (function(chat){
  var board = $('#messageBoard');
  var clear = $('#clearBtn');

  chat.deleteMessage = function(element, id){
    console.log('deleteMessage running');
    Chatty.removeFromAllMessages(id);
    element.remove();
    checkClearBtnState();
  }

  chat.readAllMessages = function(messages){
    console.log('readAllMessages running');
    var messageString = '';
    for (var i = 0; i < messages.length; i++){
      for (var id in messages[i]){
        messageString += `<div id='message${i}' class='row'><div class='message col-xs-10'>${messages[i][id]}</div><div class='col-xs-2'><input class='deleteBtn' type='button' value='Delete'></div></div>`;
      }
    }
    board.html(messageString);
    checkClearBtnState();
    Chatty.loadDynamicEvents();
  }

  chat.clearMessages = function(){
    console.log('clearMessages running');
    Chatty.clearAllMessages();
    board.html('');
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