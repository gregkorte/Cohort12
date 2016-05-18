'use-strict';
var CarLot = (function(lot){

  lot.activateEvents = function(){
    console.log('activateEvents running');
  };

  return lot;
})(CarLot || {});