var Chatty = (function(chat){
  var currMessage = [];

  chat.addMessage = function(id, message){
    console.log('addMessage running', id, message);
  }

  chat.deleteMessage = function(id){
    console.log('deleteMessages running');
  }

  chat.readAllMessages = function(){
    console.log('readAllMessages running');
  }

  chat.clearMessages = function(){
    console.log('clearMessges running');
  }

  return chat;
})(Chatty || {});