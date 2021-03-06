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
  domString += `<h3>Cat Food Brands</h3>
  <table class="table table-bordered table-striped">
  <tr><thead><th>Product</th><th>Breeds</th><th>Types</th>
  <th>Weight</th><th>Price</th></tr></thead>`

  for (var a = 0; a < food.length; a++){
    var name = food[a].name;
    var breeds = food[a].breeds;
    var types = food[a].types;
    for (var b = 0; b < breeds.length; b++){
      for (var c = 0; c < types.length; c++){
        var volumes = types[c].volumes;
        for (var d = 0; d < volumes.length; d++){
          domString += `<tr><td>${food[a].name}</td>
          <td>${breeds[b]}</td><td>${types[c].type}</td>
          <td>${volumes[d].name}</td><td>\$${volumes[d].price}</td></tr>`;
        }
      }
    }
  }
  domString += `</table>`;
  writeToDom(domString);
}

function buildDogTable(food){
  domString += `<h3>Dog Food Brands</h3>
  <table class="table table-bordered table-striped">
  <tr><thead><th>Product</th><th>Types</th><th>Weight</th>
  <th>Price</th></tr></thead>`

  for (var a = 0; a < food.length; a++){
    var name = food[a].name;
    var types = food[a].types;
    for (var c = 0; c < types.length; c++){
      var volumes = types[c].volumes;
      for (var d = 0; d < volumes.length; d++){
        domString += `<tr><td>${food[a].name}</td>
        <td>${types[c].type}</td><td>${volumes[d].name}</td>
        <td>\$${volumes[d].price}</td></tr>`;
      }
    }
  }
  domString += `</table>`;
  writeToDom(domString);
}

function writeToDom(string){
  output.innerHTML = string;
}

getFoods();
