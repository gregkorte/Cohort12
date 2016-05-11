"use strict";

var SandwichMaker = (function(maker){

  let condimentPrice = {
    "nocondiments": 0,
    "mayo": .15,
    "mustard": .15,
    "vinegar": .15,
    "ranch": .20
  };

  maker.addCondiment = function(choice){
    return condimentPrice[choice];
  };

  return maker;
})(SandwichMaker);
