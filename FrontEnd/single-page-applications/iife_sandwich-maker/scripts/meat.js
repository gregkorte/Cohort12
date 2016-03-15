"use strict";

var SandwichMaker = (function(maker){

  let meatPrice = {
    "nomeat": 0,
    "ham": 1.25,
    "roast beef": 1.75,
    "turkey": 1.50,
    "bacon": .75
  };

  maker.addMeat = function(choice){
    return meatPrice[choice];
  };

  return maker;
})(SandwichMaker);