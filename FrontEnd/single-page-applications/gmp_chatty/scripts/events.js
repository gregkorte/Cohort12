var Chatty = (function(chat){

  var clear = $('#clearBtn');
  var input = $('#input');
  var id = input.attr('id');
  var dark = $('#darkTheme');
  var large = $('#largeText');
  var board = $('#messageBoard');

  clear.click(function(){
    Chatty.clearMessages();
  })

  input.keyup(function(event){
    if(event.keyCode === 13){
      Chatty.addMessage(input.val(), id);
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
      console.log(target);
      Chatty.deleteMessage(target, target.id);
    })
  }

  return chat;
})(Chatty || {});