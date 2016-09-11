"use strict";

$(document).ready(function() {

  let category_selector = $('.category_selector');
  let output = $('.output');
  let categories, types, products;

  function fail(){
    console.log('$.ajax request failed!');
  }

  function getDropdown(){
     $.ajax({
          url: "inventory_json/categories.json"
        }).done(function(result) {
          result = JSON.parse(result).categories;
          populateDropdown(result);
        }).fail(function(error){
          fail(error);
        });
  }

  var getCategories = function(){
    return new Promise((resolve, reject) => {
      $.ajax({
          url: "inventory_json/categories.json"
        }).done(function(result) {
          result = JSON.parse(result).categories;
          resolve(result);
        }).fail(function(error){
          reject(error);
        });
    });
  };

  var getTypes = function(){
    return new Promise((resolve, reject) => {
      $.ajax({
          url: "inventory_json/types.json"
        }).done(function(result) {
          result = JSON.parse(result).types;
          resolve(result);
        }).fail(function(error){
          reject(error);
        });
    });
  };

  var getProducts = function(){
    return new Promise((resolve, reject) => {
      $.ajax({
          url: "inventory_json/products.json"
        }).done(function(result) {
          result = JSON.parse(result).products;
          resolve(result);
        }).fail(function(error){
          reject(error);
        });
    });
  };

  function populateDropdown(categories){
    for(var key in categories){
      let currentCategory = categories[key];
      let option = `<li class="option" id="${currentCategory.id}">${currentCategory.name}</li>`;
      category_selector.append(option);
    }
    loadEventListeners();
  }

  function loadEventListeners(){
    category_selector.click(function(event){
      getInventory(Number(event.target.id));
    });
  }

  function filterCategories(id){
    for(var key in categories){
      if(id === categories[key].id){
        filterTypes(id, categories[key].name);
      }
    }
  }

  function filterTypes(id, name){
    let typesArr = [];
    for(var key in types){
      if(id === types[key].category){
        let currentType = {
          categoryName: name,
          typeName: types[key].name,
          productType: types[key].id
        };
        typesArr.push(currentType);
      }
    }
    filterProducts(typesArr);
  }

  function filterProducts(typesArr){
    let productsArr = [];
    for(var type in typesArr){
      // console.log(typesArr[type]);
      for(var product in products){
        for(var key in products[product]){
          // console.log(products[product][key])
          if(typesArr[type].productType === products[product][key].type){
            let currentProduct = {
              Category: typesArr[type].categoryName,
              Type: typesArr[type].typeName,
              Name: products[product][key].name,
              Description: products[product][key].description
            };
            productsArr.push(currentProduct);
          }
        }
      }
    }
    populateDom(productsArr);
  }

  function getInventory(id){
    getCategories()
      .then(function(_categories){
        categories = _categories;
        return getTypes();
      })
      .then(function(_types){
        types = _types;
        return getProducts();
      })
      .then(function(_products){
        products = _products;
      })
      .then(function(){
        filterCategories(id);
      });
  }

  function populateDom(productsArr){
    output.html('');
    let headerArr = Object.keys(productsArr[0]);
    output.append(`<thead><tr><th>${headerArr[0]}</th><th>${headerArr[1]}</th><th>${headerArr[2]}</th><th>${headerArr[3]}</th></tr></thead>`);
    for(var key in productsArr){
      output.append(`<tbody><tr><td>${productsArr[key].Category}</td><td>${productsArr[key].Type}</td><td>${productsArr[key].Name}</td><td>${productsArr[key].Description}</td></tr></tbody>`);
    }
  }

  getDropdown();

});
