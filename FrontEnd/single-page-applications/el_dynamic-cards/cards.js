var input = document.getElementById('input');
var create = document.getElementById('create');
var output = document.getElementById('container');
var cards = document.getElementsByClassName('cards');
var del = document.getElementsByClassName('del');

function getInput(){
  return input.value;
}

function buildCard(input){
  output.innerHTML += '<div class="cards"><p>'
                      + input
                      + '</p><input type="button" value="Delete" class="del"></div>'
}

function loadEventListeners(){
  for (var i = 0; i < cards.length; i++){
    var card = cards[i];
    del[i].addEventListener('click', function(event){
      this.closest('div').remove();
    })
  }
}

create.addEventListener('click', function(){
  buildCard(getInput());
  loadEventListeners();
})