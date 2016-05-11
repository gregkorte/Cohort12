'use-strict';

let output = document.getElementById('output');
let store = ['dogs', 'cats'];
let domString = '';
let dogs;
let cats;

function getJson(file){
  let request = new XMLHttpRequest()
  request.addEventListener('load', function () {
    switch(file){
      case 'dogs.json':
        dogs = JSON.parse(this.responseText);
        buildDogTable(dogs.dog_brands);
        return;
      case 'cats.json':
        cats = JSON.parse(this.responseText);
        buildCatTable(cats.cat_brands);
        return;
    }
  });
  request.open('GET', file);
  request.send();
}

function getFoods(){
  output.innerHTML = '';
  for (var i = 0; i < store.length; i++){
    getJson(`${store[i]}.json`);
  }
}

function buildCatTable(food){
  console.log("cats running");

  domString += `<table class="table table-striped">`
  domString += `<tr><thead><th>Product</th>`
  domString += `<th>Breeds</th>`
  domString += `<th>Types</th>`
  domString += `<th>Weight/Price</th></tr></thead>`

  for (var a = 0; a < food.length; a++){
    var name = food[a].name;
    var breeds = food[a].breeds;
    var types = food[a].types;
    for (var b = 0; b < breeds.length; b++){
      for (var c = 0; c < types.length; c++){
        var volumes = types[c].volumes;
        for (var d = 0; d < volumes.length; d++){
          domString += `<tr><td>${food[a].name}</td>
          <td>${breeds[b]}</td>
          <td>${types[c].type}</td>
          <td>${volumes[d].name}: ${volumes[d].price}</td></tr>`;
        }
      }
    }
  }
  domString += `</table>`;
  writeToDom(domString);
}

function buildDogTable(food){
  console.log("dogs running");
  domString += `<table class="table table-striped">`
  domString += `<tr><thead><th>Product</th>`
  domString += `<th>Types</th>`
  domString += `<th>Weight/Price</th></tr></thead>`

  for (var a = 0; a < food.length; a++){
    var name = food[a].name;
    var types = food[a].types;
    for (var c = 0; c < types.length; c++){
      var volumes = types[c].volumes;
      for (var d = 0; d < volumes.length; d++){
        domString += `<tr><td>${food[a].name}</td>
        <td>${types[c].type}</td>
        <td>${volumes[d].name}: ${volumes[d].price}</td></tr>`;
      }
    }
  }
  domString += `</table>`;
  writeToDom(domString);
}

function writeToDom(string){
  console.log(string);
  output.innerHTML = string;
}

getFoods();
