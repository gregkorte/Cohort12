"use strict";

var SandwichMaker = (function(maker){

  let breadPrice = {
    "nobread": 0,
    "white": .50,
    "wheat": .50,
    "rye": .50,
    "pumpernickel": .75
  };

  maker.addBread = function(choice){
    let price = breadPrice[choice];
    return price;
  };

  return maker;
})(SandwichMaker);