"use-strict";

var Translator = (function(language){

 let lexicon = {
    merry: "fröhlich",
    christmas: "Weihnachten",
    and: "und",
    a: "ein",
    happy: "glücklich",
    new: "neu",
    year: "Jahr",
    holidays: "Ferien",
    seasons: "Jahreszeiten",
    greetings: "Gruß",
    peace: "Frieden",
    on: "auf",
    earth: "Erde",
    goodwill: "Wohlwollen",
    to: "nach",
    men: "Männer",
    we: "wir",
    wish: "Wunsch",
    you: "Sie",
    wishing: "wünschen",
    holiday: "Urlaub",
    season: "Jahreszeit",
    may: "kann",
    the: "das",
    force: "Kraft",
    be: "Sein",
    with: "mit"
 };

language.translateToGerman = function(input){
  input.forEach(function(element){
    var dictionary = Object.keys(lexicon);
    for (var i in dictionary){
      if (element === dictionary[i]){
        output.innerHTML += lexicon[element] + " ";
      }
    }
  })
  var lang = 'german';
  Translator.speak(lang);
  output.innerHTML += "!";
  input = '';
}

return language;

})(Translator || {});