'use strict';

var Battledome = (function(battledome){

  battledome.Combatants = {};

  battledome.Combatants.Player = function(name){
    this.bot = '';
    this.weapon = '';
    this.mod = '';
    this.name = name;
    this.wins;
    this.loses;
  }

  battledome.Combatants.Player.prototype.setBot = function(botType){
    this.bot = new Battledome.BotLab[botType];
  }

  battledome.Combatants.Player.prototype.setWeapon = function(weaponType){
    this.weapon = weaponType;
  }

  battledome.Combatants.Player.prototype.setMod = function(weaponType){
    this.mod = modType;
  }

  return battledome;

})(Battledome || {});
