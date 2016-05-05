"use-strict";

var Translator = (function(language){

  let lexicon = {
    merry: "веселый",
    christmas: "рождество",
    and: "а также",
    a: "",
    happy: "счастливый",
    new: "новый",
    year: "год",
    holidays: "каникулы",
    seasons: "времена года",
    greetings: "Привет",
    peace: "мир",
    on: "на",
    earth: "Земля",
    goodwill: "доброжелательность",
    to: "к",
    men: "люди",
    we: "мы",
    wish: "желание",
    you: "вы",
    wishing: "желающих",
    holiday: "день отдыха",
    season: "время года",
    may: "май",
    the: "",
    force: "сила",
    be: "быть",
    with: "с"
  };

language.translateToRussian = function(input){
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