var Chatty = (function(chat){

  var submit = $('#submitBtn');
  var input = $('#input');
  var id = input.attr('id');

  submit.click(function(){
    Chatty.addMessage(id, input.val())
  })

  input.keyup(function(event){
    if(event.keyCode === 13){
      Chatty.addMessage(id, input.val());
    }
  })

  return chat;
})(Chatty || {});