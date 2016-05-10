'use-strict';

let output = document.getElementById('output');
let store = ['dogs', 'cats'];
let dogs;
let cats;

function getJson(file){
  let request = new XMLHttpRequest()
  request.addEventListener('load', function () {
    switch(file){
      case 'dogs.json':
        dogs = JSON.parse(this.responseText);
        buildDom(dogs.dog_brands);
        return;
      case 'cats.json':
        cats = JSON.parse(this.responseText);
        buildDom(cats.cat_brands);
        return;
    }
  });
  request.open('GET', file);
  request.send();
}

function getFoods(){
  for (var i = 0; i < store.length; i++){
    getJson(`${store[i]}.json`);
  }
}

function buildDom(food){
  console.log(food);
}

getFoods();
