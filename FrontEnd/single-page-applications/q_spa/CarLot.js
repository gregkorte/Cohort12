var CarLot = (function() {
  var inventory;

  return {
    getInventory: function () {
      return inventory;
    },
    loadInventory: function (populatePage) {
      var inventoryLoader = new XMLHttpRequest();

      inventoryLoader.addEventListener("load", function() {
        inventory = JSON.parse(this.responseText).cars;
        populatePage(inventory);
      });
      inventoryLoader.open('GET', 'inventory.json');
      inventoryLoader.send();

    }
  };

})(CarLot || {});