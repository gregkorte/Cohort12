"use-strict";

var Translator = (function(language){
  var output = document.getElementById('output');

  var lexicon = {
    merry: "merry",
    christmas: "nolliag",
    and: "agus",
    a: "a",
    happy: "sona",
    new: "ùr",
    year: "bliadhna",
    holidays: "saor-làithean",
    seasons: "ràithean",
    greetings: "soraidh",
    peace: "sìth",
    on: "air",
    earth: "talamh",
    goodwill: "deagh-ghean",
    to: "gu",
    men: "fir",
    we: "tha sinn a '",
    wish: "airson",
    you: "thu",
    wishing: "a tha ag iarraidh",
    holiday: "saor-làithean",
    season: "ràith",
    may: "A' Chèitean",
    the: "a '",
    force: "feachd",
    be: "a bhith",
    with: "le"
  };

  language.translateToGaelic = function(input){
  input.forEach(function(element){
    var dictionary = Object.keys(lexicon);
    for (var i in dictionary){
        if (element === dictionary[i]){
            output.innerHTML += lexicon[element] + " ";
        }
    }
  })
  output.innerHTML += "!";
  input = '';
}

return language;

})(Translator || {});