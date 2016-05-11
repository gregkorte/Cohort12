"use strict";

var SandwichMaker = (function() {

  let totalPrice = 0;
  let sandwich = {
    "bread": '',
    "meats": [],
    "cheeses": [],
    "condiments": [],
    "veggies": []
  };

  return {
    getBreadPrice: function(choice){
      let price = SandwichMaker.addBread(choice);
      sandwich.bread = choice;
      totalPrice += price;
      totalPrice = Math.round(totalPrice*100)/100;
    },
    getMeatPrice: function(choice){
      let price = SandwichMaker.addMeat(choice);
      sandwich.meats.push(choice);
      totalPrice += price;
      totalPrice = Math.round(totalPrice*100)/100;
    },
    getCheesePrice: function(choice){
      let price = SandwichMaker.addCheese(choice);
      sandwich.cheeses.push(choice);
      totalPrice += price;
      totalPrice = Math.round(totalPrice*100)/100;
    },
    getCondimentPrice: function(choice){
      let price = SandwichMaker.addCondiment(choice);
      sandwich.condiments.push(choice);
      totalPrice += price;
      totalPrice = Math.round(totalPrice*100)/100;
    },
    getVeggiePrice: function(choice){
      let price = SandwichMaker.addVeggie(choice);
      sandwich.veggies.push(choice);
      totalPrice += price;
      totalPrice = Math.round(totalPrice*100)/100;
    },
    getSandwich: function(){
      return sandwich;
    },
    getTotal: function(){
      return totalPrice.toFixed(2);
    },
    clearTotal: function(){
      totalPrice = 0;
    }
  };
})();
