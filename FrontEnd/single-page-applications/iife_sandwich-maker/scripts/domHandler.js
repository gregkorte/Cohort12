"use strict";

let selectedTopping;
let breadChoice = document.getElementById('bread');
let meatChoice = document.getElementById('meat');
let cheeseChoice = document.getElementById('cheese');
let condimentChoice = document.getElementById('condiments');
let veggieChoice = document.getElementById('veggies');

  breadChoice.addEventListener('change', function(event){
    console.log(event.currentTarget)
    selectedTopping = event.target.value;
    SandwichMaker.getBreadPrice(selectedTopping);
  })

  meatChoice.addEventListener('change', function(event){
    selectedTopping = event.target.value;
    SandwichMaker.getMeatPrice(selectedTopping);
  })

  cheeseChoice.addEventListener('change', function(event){
    selectedTopping = event.target.value;
    SandwichMaker.getCheesePrice(selectedTopping);
  })

  condimentChoice.addEventListener('change', function(event){
    selectedTopping = event.target.value;
    SandwichMaker.getCondimentPrice(selectedTopping);;
  })

  veggieChoice.addEventListener('change', function(event){
    selectedTopping = event.target.value;
    SandwichMaker.getVeggiePrice(selectedTopping);
  })
