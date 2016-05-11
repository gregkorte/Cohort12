"use strict";

let selectedTopping;
let priceOutput = document.getElementById('output-price')
let output = document.getElementById('output-order');
let breadChoice = document.getElementById('bread');
let meatChoice = document.getElementById('meat');
let cheeseChoice = document.getElementById('cheese');
let condimentChoice = document.getElementById('condiments');
let veggieChoice = document.getElementById('veggies');

breadChoice.addEventListener('change', function(event){
  selectedTopping = event.target.value;
  SandwichMaker.getBreadPrice(selectedTopping);
  priceOutput.innerHTML = 'Total: $' + SandwichMaker.getTotal();
})

meatChoice.addEventListener('change', function(event){
  selectedTopping = event.target.value;
  SandwichMaker.getMeatPrice(selectedTopping);
  priceOutput.innerHTML = 'Total: $' + SandwichMaker.getTotal();
})

cheeseChoice.addEventListener('change', function(event){
  selectedTopping = event.target.value;
  SandwichMaker.getCheesePrice(selectedTopping);
  priceOutput.innerHTML = 'Total: $' + SandwichMaker.getTotal();
})

condimentChoice.addEventListener('change', function(event){
  selectedTopping = event.target.value;
  SandwichMaker.getCondimentPrice(selectedTopping);
  priceOutput.innerHTML = 'Total: $' + SandwichMaker.getTotal();
})

veggieChoice.addEventListener('change', function(event){
  selectedTopping = event.target.value;
  SandwichMaker.getVeggiePrice(selectedTopping);
  priceOutput.innerHTML = 'Total: $' + SandwichMaker.getTotal();
})

clearBtn.addEventListener('click', function(){
  SandwichMaker.clearTotal();
  priceOutput.innerHTML = 'Total: $' + SandwichMaker.getTotal();
  output.innerHTML = '';
  output.classList.remove('chalkboard');
})

orderBtn.addEventListener('click', function(){
  output.classList.add('chalkboard');
  let sandwich = SandwichMaker.getSandwich();
  let bread = '';
  let meats = '';
  let cheeses = '';
  let condiments = '';
  let veggies = '';
    for (let i in sandwich){
      let b_len = sandwich.bread.length;
      let m_len = sandwich.meats.length;
      let ch_len = sandwich.cheeses.length;
      let c_len = sandwich.condiments.length;
      let v_len = sandwich.veggies.length;
    switch(i){
      case "meats":
        if (m_len === 0){
          meats += `vegetarian`;
        } else {
          for (let i = 0; i < m_len; i++){
            if (m_len === 1){
              meats += `${sandwich.meats[i]}`;
            } else if (sandwich.meats[i] === sandwich.meats[m_len - 1]){
              meats += `and ${sandwich.meats[i]}`;
            }
            else {
              meats += `${sandwich.meats[i]}, `;
            }
          }
        }
        break;
      case "bread":
        bread += `${sandwich.bread}`;
        break;
      case "cheeses":
        if (ch_len === 0){
          cheeses += `no cheese`;
        } else {
          for (let i = 0; i < ch_len; i++){
            if (ch_len === 1){
              cheeses += `${sandwich.cheeses[i]}`;
            } else if (sandwich.cheeses[i] === sandwich.cheeses[ch_len - 1]){
              cheeses += `and ${sandwich.cheeses[i]}`;
            }
            else {
              cheeses += `${sandwich.cheeses[i]}, `;
            }
          }
        }
        break;
      case "condiments":
        if (c_len === 0){
          condiments += `no condiments`;
        } else {
          for (let i = 0; i < c_len; i++){
            if (c_len === 1){
              condiments += `${sandwich.condiments[i]}`;
            } else if (sandwich.condiments[i] === sandwich.condiments[c_len - 1]){
              condiments += `and ${sandwich.condiments[i]}`;
            }
            else {
              condiments += `${sandwich.condiments[i]}, `;
            }
          }
        }
        break;
      case "veggies":
        if (v_len === 0){
          veggies += `no veggies`;
        } else {
          for (let i = 0; i < v_len; i++){
            if (v_len === 1){
              veggies += `${sandwich.veggies[i]}`;
            } else if (sandwich.veggies[i] === sandwich.veggies[v_len - 1]){
              veggies += `${sandwich.veggies[i]}`;
            }
            else {
              veggies += `${sandwich.veggies[i]}, `;
            }
          }
        }
        break;
    }
  }
  output.innerHTML = `<div>Your order is confirmed for a ${meats} sandwich on ${bread} bread with ${cheeses} cheese, ${veggies}, ${condiments}. Your total is $${SandwichMaker.getTotal()}.<div>Thanks for your order!</div>`

})
