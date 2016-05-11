var Chatty = (function(chat){

  chat.removeFromDom = function(id){
    console.log('removeFromDom running');
  }

  function removeFromArray(id){
    console.log('removeFromArray running');
  }

  return chat;
})(Chatty || {});