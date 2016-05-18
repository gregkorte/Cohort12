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
    // console.log('deleteMessage running');
    console.log(element, id)
    Chatty.removeFromAllMessages(id);
    element.remove();
    checkClearBtnState();
  }

  chat.editMessage = function(target, id, value){
    // console.log('editMessage running');
    $(target).html(value);
    Chatty.editInAllMessages(target, id, value);
  }

  chat.readAllMessages = function(messages){
    // console.log('readAllMessages running');
    var messageString = '';
    for (var i = 0; i < messages.length; i++){
      for (var id in messages[i]){
        messageString += `<div id='${id}' class='row messageWrap'>
          <div class='row'>
            <span class='name'>${messages[i][id].user}</span>
            <span class='time'>${messages[i][id].time}</span>
          </div>
          <div class='row'>
            <span class='row message col-xs-10'>${messages[i][id].message}</span>
            <span class='buttons col-xs-2'>
              <div class='editBtn glyphicon glyphicon-pencil' style='cursor:pointer' title='Edit'></div>
              <div class='deleteBtn glyphicon glyphicon-trash' style='cursor:pointer' title='Delete'></div>
            </span>
          </div>
        </div>`;
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
