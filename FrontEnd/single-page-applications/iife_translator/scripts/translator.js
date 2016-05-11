"use-strict";

var button = document.getElementById('submit');
var result = document.getElementById('input');
var select = document.getElementById('select');
var output = document.getElementById('output');

function filterLanguage(selection){
  switch(selection){
    case "Gaelic":
      return Translator.translateToGaelic;
    case "German":
      return Translator.translateToGerman;
    case "Russian":
      return Translator.translateToRussian;
    default:
      return function(){
        alert("Please select a language!")
      }
  }
}

button.addEventListener('click', function(){
  output.innerHTML = '';
  var translate = filterLanguage(select.value);
  translate(result.value.toLowerCase().split(' '));
});