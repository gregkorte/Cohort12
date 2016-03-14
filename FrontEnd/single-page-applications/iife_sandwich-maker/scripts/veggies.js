"use strict";

var SandwichMaker = (function(maker){

  let veggiePrice = {
    "noveggies": 0,
    "lettuce": .25,
    "tomato": .20,
    "onion": .20,
    "spinach": .30
  };

  maker.addVeggie = function(choice){
    return veggiePrice[choice];
  };

  return maker;
})(SandwichMaker);