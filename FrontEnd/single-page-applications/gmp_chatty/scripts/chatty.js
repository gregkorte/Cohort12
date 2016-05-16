var Chatty = (function(){
  var messages = [];
  return {
    getMessages: function(){
      return messages;
    },
    loadMessages: function(){
      $.ajax({
          url: "messages.json",
          method: "GET"
        }).done(function(data){
          messages = JSON.parse(data).messages;
          // console.log('loadMessages running');
          Chatty.setStorage(messages);
      });
    }
  }

})(Chatty || {});

Chatty.loadMessages();
