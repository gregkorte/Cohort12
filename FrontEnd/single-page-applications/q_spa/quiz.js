'use-strict';
var CarLot = (function(lot){

  function populatePage (inventory) {
    console.log(inventory);
    // Loop over the inventory and populate the page
    for (var i = 0; i < inventory.length; i++){
      console.log(inventory[i])
    }

    // Now that the DOM is loaded, establish all the event listeners needed
    CarLot.activateEvents();
  }

  // Load the inventory and send a callback function to be
  // invoked after the process is complete
  CarLot.loadInventory(populatePage);

  return lot;
})(CarLot || {});