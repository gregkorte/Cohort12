var title = document.getElementById('page-title');
var input = document.getElementById('keypress-input');
var output = document.getElementById('output-target');
var guinea= document.getElementById('guinea-pig');
var color = document.getElementById('add-color');
var large = document.getElementById('make-large');
var border = document.getElementById('add-border');
var round = document.getElementById('add-rounding');

var article = document.getElementsByClassName('article-section');

title.addEventListener('mouseover', function(){
  output.innerHTML = "You moved your mouse over the header"
})

title.addEventListener('mouseout', function(){
  output.innerHTML = "You left me!!"
})

input.addEventListener('keyup', function(event){
  output.innerHTML = event.currentTarget.value;
})

color.addEventListener('click', function(){
  guinea.classList.toggle('blue');
})

large.addEventListener('click', function(){
  guinea.classList.toggle('hulk');
})

border.addEventListener('click', function(){
  guinea.classList.toggle('border');
})

round.addEventListener('click', function(){
  guinea.classList.toggle('round');
})

for (var i = 0; i < article.length; i++){
  var section = article[i];
  console.log(section)
  section.addEventListener('click', function(event){
    var text = event.currentTarget.innerHTML;
    output.innerHTML = 'You clicked on the ' + text + ' section.';
  })
  article[0].classList.add('bold');
  article[article.length-1].classList.add('bold', 'italic');
}