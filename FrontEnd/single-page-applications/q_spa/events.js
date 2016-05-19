'use-strict';
var CarLot = (function(lot){


  lot.activateEvents = function(){
    // console.log('activateEvents running');

    var cars = document.getElementsByClassName('car');

    for(var i = 0; i < cars.length; i++){
      currentCar = cars[i];
      currentCar.addEventListener('click', function(e){
        var input = document.getElementById('input');
        var carDiv = e.currentTarget;
        input.value = '';
        input.focus();
        lot.resetStyles(cars);
        lot.changeStyles(carDiv, 'grey');
        lot.mirrorText(carDiv, input)
      })
    }

  };

  lot.changeStyles = function(carDiv, grey){
    carDiv.classList.add(grey, 'thick');
  }

  lot.resetStyles = function(cars){
    for (var i = 0; i < cars.length; i++){
      var carDiv = cars[i];
      carDiv.classList.remove('grey', 'thick');
    }
  }

  lot.mirrorText = function(carDiv, input){
    input.addEventListener('keyup', function(){
      if (carDiv.classList.contains('grey')){
        var text = carDiv.querySelector('p');
        text.innerHTML = input.value;
      }
    })
  }

  return lot;
})(CarLot || {});
