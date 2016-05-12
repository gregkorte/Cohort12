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
      Chatty.addMessage(id, input.val());
    }
  })

  dark.change(function(){
    console.log('dark theme initiated');
    board.toggleClass('dark');
  })

  large.change(function(){
    console.log('large text initiated');
    board.toggleClass('large');
  })

  chat.loadDynamicEvents = function(){
    var del = $('.deleteBtn');
    del.click(function(event){
      var target = event.currentTarget.closest('div');
      Chatty.removeFromDom(target);
    })
  }

  return chat;
})(Chatty || {});