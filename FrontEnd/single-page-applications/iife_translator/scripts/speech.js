"use-strict";

var Translator = (function(language){

  language.speak = function(lang){
    var text = document.getElementById('output').innerHTML;
    var msg = new SpeechSynthesisUtterance();
    var voice = window.speechSynthesis.getVoices();
    msg.text = text;
    switch (lang){
      case 'gaelic':
        msg.voice = voice[1];
        break;
      case 'german':
        msg.voice = voice[13];
        break;
      case 'russian':
        msg.voice = voice[16];
        break;
    }
    speechSynthesis.speak(msg);
  }

return language;

})(Translator || {});