var Chatty = (function(){
  var messages = [];

  return {
    getMessages: function(){
      console.log('getMessages running');
      return messages;
    },
    loadMessages: function(){
      console.log('loadMessages running');
    }
  }


})(Chatty || {});