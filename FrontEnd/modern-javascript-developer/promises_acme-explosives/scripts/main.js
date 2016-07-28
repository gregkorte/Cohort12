$(document).ready(function() {

  function success(result){
    console.log(result)
  }

function getCategories(){
  $.ajax({
      url: "inventory_json/categories.json"
    }).done(function(result) {
      result = JSON.parse(result).categories;
      success(result)
      console.log("the contents of categories.json");
    }).fail(function(){
      fail();
    });
}

function getTypes(){
  $.ajax({
        url: "inventory_json/types.json"
      }).done(function(result) {
      result = JSON.parse(result).types;
        success(result)
        console.log("the contents of types.json");
      }).fail(function(){
        fail();
      });
}

function getProducts(){
  $.ajax({
      url: "inventory_json/products.json"
    }).done(function(result) {
      result = JSON.parse(result).products;
      success(result)
      console.log("the contents of products.json");
    }).fail(function(){
      fail();
    });
}

getCategories();
getTypes();
getProducts();

})
