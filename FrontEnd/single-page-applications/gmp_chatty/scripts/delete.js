var Chatty = (function(chat){

  var board = $('#messageBoard');

  chat.removeFromDom = function(element){
    element.remove();
  }

  function removeFromArray(id){
    console.log('removeFromArray running');
  }

  chat.clearMessages = function(){
    board.html('');
  }

  return chat;
})(Chatty || {});