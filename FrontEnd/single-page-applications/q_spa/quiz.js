'use-strict';
var CarLot = (function(lot){

  var output = document.getElementById('output');
  var outputString = '';

  function populatePage (inventory) {
    // Loop over the inventory and populate the page
    for (var i = 0; i < inventory.length; i++){
      if(i % 3 === 0){
        outputString += `<div class='row'>`
      }
      outputString += `<div class='car col-xs-4'
      style='border-color:${inventory[i].color}'>
      <div>${inventory[i].year}</div>
      <div>${inventory[i].make}</div>
      <div>${inventory[i].model}</div>
      <div><p>${inventory[i].description}</p></div>
      <div>${inventory[i].price}</div>
      <div>${inventory[i].purchased}</div>
      </div>`

      if((i + 1) % 3 === 0){
        outputString += `</div>`
      }
    }
    output.innerHTML = outputString;

    // Now that the DOM is loaded, establish all the event listeners needed
    CarLot.activateEvents();
  }

  // Load the inventory and send a callback function to be
  // invoked after the process is complete
  CarLot.loadInventory(populatePage);

  return lot;
})(CarLot || {});