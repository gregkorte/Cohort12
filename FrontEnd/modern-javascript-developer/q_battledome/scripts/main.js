"use strict"

var Battledome = (function(battledome){

  // TRY TO GET THIS DONE WITH AJAX CALL TO JSON FILE //
  let bgObject = {
    "Space": ["assets/terra.jpg", "assets/space.jpg", "assets/interior.jpg"],
    "Terran": ["assets/terra.jpg"],
    "Interior": ["assets/interior.jpg"]
  }

  battledome.Arena = function(){
    this.background = '';
    this.player1 = '';
    this.player2 = '';
    this.champion;
  }

  battledome.Arena.prototype.setBg = function(bgType){
    var bg = bgObject[bgType];
    var newBg = bg[Math.floor(Math.random()*bg.length)];
    this.background = newBg;
  }

  battledome.Arena.prototype.setPlayer = function(player, name){
    this[player] = new Battledome.Combatants.Player(name);
  }

return battledome;

})(Battledome || {});
