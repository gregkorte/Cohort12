var Chatty = (function(chat){

  var board = $('#messageBoard');

  chat.removeFromDom = function(id){
    console.log('removeFromDom running');
  }

  function removeFromArray(id){
    console.log('removeFromArray running');
  }

  chat.clearMessages = function(){
    board.html('');
  }

  return chat;
})(Chatty || {});