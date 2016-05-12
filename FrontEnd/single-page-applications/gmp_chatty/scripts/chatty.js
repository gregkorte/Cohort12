var Chatty = (function(){
  var messages = [];

  return {
    getMessages: function(){
      console.log('getMessages running');
      return messages;
    },
    loadMessages: function(){
      console.log('loadMessages running');
      $.ajax({
          url: "messages.json",
          method: "GET"
        }).done(function(data){
          data = JSON.parse(data);
          Chatty.readAllMessages(data.messages);
      });
    }
  }

})(Chatty || {});

Chatty.loadMessages();