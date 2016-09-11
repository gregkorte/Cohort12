"use strict"

let Battledome = {};




Battledome.Arena = function(background){
  this.background = background;
  this.champion;
}

Battledome.Combatants.Player = function(name, player){
  this.player = player;
  this.name = name;
  this.wins;
  this.loses;
}

Battledome.Combatants.Robot = function(name){
  this.player = '';
  this.name = name;
}

Battledome.Combatants.prototype.
Robot.prototype.setPlayer = function(player){
  this.player = player;
}


let titan = new Robot('Titan');
titan.setPlayer(new Player('Gryphion', 1));
console.log(titan)

let mechanique = new Robot('Mechanique');
mechanique.setPlayer(new Player('Sphynx', 2))
console.log(mechanique)