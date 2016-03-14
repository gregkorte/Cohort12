"use strict";

var SandwichMaker = (function() {

  let totalPrice = 0;

  return {
    getBreadPrice: function(choice){
      let price = SandwichMaker.addBread(choice);
      totalPrice += price;
      totalPrice = Math.round(totalPrice*100)/100;
      console.log(totalPrice)
    },
    getMeatPrice: function(choice){
      let price = SandwichMaker.addMeat(choice);
      totalPrice += price;
      totalPrice = Math.round(totalPrice*100)/100;
      console.log(totalPrice)
    },
    getCheesePrice: function(choice){
      let price = SandwichMaker.addCheese(choice);
      totalPrice += price;
      totalPrice = Math.round(totalPrice*100)/100;
      console.log(totalPrice)
    },
    getCondimentPrice: function(choice){
      let price = SandwichMaker.addCondiment(choice);
      totalPrice += price;
      totalPrice = Math.round(totalPrice*100)/100;
      console.log(totalPrice)
    },
    getVeggiePrice: function(choice){
      let price = SandwichMaker.addVeggie(choice);
      totalPrice += price;
      totalPrice = Math.round(totalPrice*100)/100;
      console.log(totalPrice)
    }
  };
})();