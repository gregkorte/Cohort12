"use-strict";

var button = document.getElementById('submit');
var result = document.getElementById('input');
var select = document.getElementById('select');

function filterLanguage(selection){
  switch(selection){
    case "Gaelic":
      return Translator.translateToGaelic;
    case "German":
      return Translator.translateToGerman;
    case "Russian":
      return Translator.translateToRussian;
  }
}

button.addEventListener('click', function(){
  var translate = filterLanguage(select.value);
  translate(result.value.split(' '));
});