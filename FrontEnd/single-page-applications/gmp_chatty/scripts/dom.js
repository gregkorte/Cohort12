'use-strict';

var Chatty = (function(chat){
  var board = $('#messageBoard');
  var clear = $('#clearBtn');
  var edit = $('#editSaveBtn');

  chat.deleteMessage = function(element, id){
    // console.log('deleteMessage running');
    Chatty.removeFromAllMessages(id);
    element.remove();
    checkClearBtnState();
  }

  chat.editMessage = function(target, id, value){
    // console.log('editMessage running');
    $(target).html(value);
    Chatty.editInAllMessages(target, id);
  }

  chat.readAllMessages = function(messages){
    // console.log('readAllMessages running');
    var messageString = '';
    for (var i = 0; i < messages.length; i++){
      for (var id in messages[i]){
        messageString += `<div id='message${i}' class='row'>
        <div class='message col-xs-9'>${messages[i][id]}</div>
        <div class='buttons col-xs-3'>
        <input class='editBtn' type='button' value='Edit'>
        <input class='deleteBtn' type='button' value='Delete'>
        </div></div>`;
      }
    }
    board.html(messageString);
    checkClearBtnState();
    chat.showClearButton();
    Chatty.loadDynamicEvents();
  }

  chat.clearMessages = function(){
    // console.log('clearMessages running');
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

  chat.showClearButton = function(){
    clear.show();
    edit.hide();
  }

  chat.showEditButton = function(){
    clear.hide();
    edit.show();
  }

  return chat;
})(Chatty || {});
