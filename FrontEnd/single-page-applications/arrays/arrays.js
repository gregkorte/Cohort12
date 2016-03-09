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

strManipBtn.addEventListener('click', function(){
  testString = strInput.value;
  reversal(testString);
  alphabits(testString);
  palindrome(testString);
})