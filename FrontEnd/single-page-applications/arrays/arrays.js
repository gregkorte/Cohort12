// Chaining arrays
var outputChaining = document.getElementById('outputChaining');
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];

outputChaining.innerHTML = integers.sort(function(a, b){return a-b}).reverse().filter(function(array){return array < 19}).map(function(element){return element *1.5 - 1});

// String manipulation
var strInput = document.getElementById('strManipInput');
var strManipBtn = document.getElementById('strManipBtn')
var strOutput = document.getElementById('outputStringManip');

function reversal(str) {
  strOutput.innerHTML = '<div>Reverse it: ' + str.split('').reverse().join('') + '</div>';
}

function alphabits(str) {
  strOutput.innerHTML += '<div>Alphabit it: ' + str.split('').sort().join('') + '</div>'
}

function palindrome(str) {
  if (str === str.split('').reverse().join('')){
  strOutput.innerHTML += '<div>Palindrome it: Your string IS a palindrome!</div>'
  } else {
    strOutput.innerHTML += '<div> Palindrome it: Your string is NOT a palindrome!</div>'
  }
}

var testString = "";

function strManip(){
  testString = strInput.value;
  reversal(testString);
  alphabits(testString);
  palindrome(testString);
}

strManipBtn.addEventListener('click', strManip);

strInput.addEventListener('keyup', function(event){
  if (event.keyCode === 13){
    strManip();
  }
  return;
})

// Solar system
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune", "pluto"];
/*
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
function populateSolarSystem(planet){
  var el = document.getElementById("planets");
  el.innerHTML += '<div>' + planet + '</div>'
}

planets.forEach(populateSolarSystem)

// Use the map method to create a new array where the first letter of each planet is capitalized
planets.map(function(planet){
  var el = document.getElementById("capPlanets");
  el.innerHTML += '<div>' + planet.charAt(0).toUpperCase() + planet.slice(1) + '</div>';
})

// Use the filter method to create a new array that contains planets with the letter 'e'
planets.filter(function(planet){
  var el = document.getElementById("filPlanets");
  if (planet.match(/e/)){
    el.innerHTML += '<div>' + planet + '</div>'
  }
  return;
})

// Use the reduce method to create a sentence from the words in the following array
var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
var el = document.getElementById('worms')

var result = words.reduce(function(prev, curr){
  return prev + ' ' + curr;
})

el.innerHTML = result