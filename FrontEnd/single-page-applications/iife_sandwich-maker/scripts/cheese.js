"use strict";

var SandwichMaker = (function(maker){

  let cheesePrice = {
    "nocheese": 0,
    "american": .50,
    "provolone": .75,
    "swiss": .75,
    "cheddar": .75
  };

  maker.addCheese = function(choice){
    return cheesePrice[choice];
  };

  return maker;
})(SandwichMaker);
