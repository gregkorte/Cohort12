var Chatty = (function(chat){

  var clear = $('#clearBtn');
  var input = $('#input');
  var dark = $('#darkTheme');
  var large = $('#largeText');
  var board = $('#messageBoard');
  var edit = $('editBtn');

  clear.click(function(){
    Chatty.clearMessages();
    input.focus();
  })

  input.keyup(function(event){
    if(event.keyCode === 13){
      Chatty.addToAllMessages(input.val());
      input.val('');
    }
  })

  dark.change(function(){
    board.toggleClass('dark');
  })

  large.change(function(){
    board.toggleClass('large');
  })

  chat.loadDynamicEvents = function(){
    console.log('loadDynamicEvents running')
    var del = $('.deleteBtn');
    del.click(function(event){
      var target = event.currentTarget.closest('.row');
      Chatty.deleteMessage(target, target.id);
    })
  }

  return chat;
})(Chatty || {});