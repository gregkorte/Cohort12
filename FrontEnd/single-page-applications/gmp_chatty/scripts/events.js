var Chatty = (function(chat){

  var body = $('body');
  var clear = $('#clearBtn');
  var input = $('#input');
  var dark = $('#darkTheme');
  var large = $('#largeText');
  var board = $('#messageBoard');
  var editSave = $('#editSaveBtn');
  var saveTheme = $('#saveThemeBtn');
  var background = $('#bgColor');
  var font = $('#fontColor');
  var nav = $('#navBar');
  var time = new Date;
  var modTime = time.getHours() + ':' + time.getMinutes();
  var user;

  clear.click(function(){
    Chatty.clearMessages();
    input.focus();
  })

  // functionality for both add and edit!
  input.keyup(function(event){
    if(event.keyCode === 13){
      user = $("input[name='user']:checked").val();
      Chatty.addToAllMessages(user, modTime, input.val());
      input.val('');
    }
  })

  dark.change(function(){
    body.toggleClass('darkBg');
    board.toggleClass('dark');
    nav.toggleClass('dark')
  })

  large.change(function(){
    board.toggleClass('large');
  })

  chat.loadDynamicEvents = function(){
    // console.log('loadDynamicEvents running')
    var del = $('.deleteBtn');
    var edit = $('.editBtn');

    del.click(function(event){
      var target = event.currentTarget.closest('.row');
      Chatty.deleteMessage(target, target.id);
    })

    edit.click(function(event){
      Chatty.showEditButton();
      user = $("input[name='user']:checked").val();
      var id = $(event.currentTarget).closest('.row').attr('id');
      var target = $(event.currentTarget).closest('.row').children('.message')[0];
      var textToEdit = target.textContent;
      input.focus().val(textToEdit).select();
      input.keyup(function(event){
        Chatty.editMessage(target, id, user, modTime, input.val());
      });
    })

    editSave.click(function(event){
      input.val('');
      Chatty.showClearButton();
    })

  }

  saveTheme.click(function(event){
    console.log(event);
    board.css('background', background.val());
    board.css('color', font.val());
    nav.css('background', background.val());
    nav.css('color', font.val());
  })

  return chat;
})(Chatty || {});
