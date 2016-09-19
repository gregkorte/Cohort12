'use strict';

var Battledome = (function(battledome){

  battledome.Combatants = {};

  battledome.Combatants.Player = function(name){
    this.bot = '';
    this.name = name;
    this.wins;
    this.loses;
    this.botHangar = [];
  }

  battledome.Combatants.Player.prototype.setBot = function(botType){
    this.bot = new Battledome.BotLab[botType];
  }

  return battledome;

})(Battledome || {});
