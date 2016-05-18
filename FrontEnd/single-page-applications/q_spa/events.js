'use-strict';
var CarLot = (function(lot){

  var cars = document.getElementsByClassName('car');

  lot.activateEvents = function(){
    console.log('activateEvents running');

    for(var i = 0; i < cars.length; i++){
      currentCar = cars[i];
      currentCar.addEventListener('click', function(e){
        var input = document.getElementById('input');
        var carDiv = e.currentTarget;
        input.value = '';
        input.focus();
      })
    }

  };

  return lot;
})(CarLot || {});
