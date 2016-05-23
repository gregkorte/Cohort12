"use strict";
let Predator = (function () {
  let carnivores = [];
  let herbivores = [];

  return {
    loadCarnivores: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();
      // Then tell the XHR object exactly what to do
      loader.open("GET", "predators.json");

      // Tell the XHR object to start
      loader.send();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);
        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackToInvoke(carnivores);

      });
    },
    loadHerbivores: function (callbackToInvoke) {
      let loader = new XMLHttpRequest();
      // Then tell the XHR object exactly what to do
      loader.open("GET", "food.json");

      // Tell the XHR object to start
      loader.send();

      loader.addEventListener("load", function () {
        // Set the value of the private array
        carnivores = JSON.parse(this.responseText);

        // Invoke the callback function so that the caller knows
        // that the process is complete. Make sure to pass the 
        // carnivore array as an argument.
        callbackToInvoke(herbivores);

      });
    }
  }
})();