var CarLot = (function () {
  var inventory = [];

  return {
    getInventory: function () {

    },
    loadInventory: function (callback) {
      console.log('i\'m in!')
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function() {
        inventory = JSON.parse(this.responseText).cars;
        console.log(inventory)
      });
      inventoryLoader.open('GET', 'inventory.json');
      inventoryLoader.send();
    }
  };

})();