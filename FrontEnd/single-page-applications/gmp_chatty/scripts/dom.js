'use-strict';

var Chatty = (function(chat){
  var board = $('#messageBoard');
  var clear = $('#clearBtn');
  var edit = $('#editSaveBtn');
  var users = $('#users');

  chat.populateUsers = function(allUsers){
    for (var i = 0; i < allUsers.length; i++){
      users.append(`<input type='radio' name='user' value='${allUsers[i]}'>${allUsers[i]}`);
    }
  }

  chat.deleteMessage = function(element, id){
    console.log('deleteMessage running');
    console.log(element, id)
    Chatty.removeFromAllMessages(id);
    element.remove();
    checkClearBtnState();
  }

  chat.editMessage = function(target, id, user, time, value){
    console.log('editMessage running');
    $(target).html(value);
    Chatty.editInAllMessages(target, id, user, time, value);
  }

  chat.readAllMessages = function(messages){
    // console.log('readAllMessages running');
    var messageString = '';
    for (var i = 0; i < messages.length; i++){
      for (var id in messages[i]){
        messageString += `<div id='${id}' class='row messageWrap'>
        <div class='row'><div class='name col-xs-2'>${messages[i][id].user}</div>
        <div class='time col-xs-2'>${messages[i][id].time}</div></div>
        <div class='row'><div class='message col-xs-8'>${messages[i][id].message}</div>
        <div class='buttons col-xs-4'>
        <input class='editBtn btn btn-default' type='button' value='Edit'>
        <input class='deleteBtn btn btn-default' type='button' value='Delete'>
        </div></div></div>`;
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
    board.html('<div class="noMessages">There are no messages to display.</div>');
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
