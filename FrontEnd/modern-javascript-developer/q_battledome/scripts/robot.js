'use strict';

var Battledome = (function(Battledome){

  Battledome.BotLab = {};

  Battledome.BotLab.Robot = function(){
    this.name = "Maximillian's Shell";
    this.healthBonus = 0;
    this.strengthBonus = 0;

    this.toString = function() {
      return this.name;
    }
  }

  Battledome.BotLab.Amorphous = function(){
    this.healthBonus = 5;
    this.speedBonus = 5;
    this.aiBonus = 30;
    this.stealthBonus = 30;
  }

  Battledome.BotLab.Amorphous.prototype = new Battledome.BotLab.Robot();

  Battledome.BotLab.Android = function(){
    this.healthBonus = 10;
    this.speedBonus = 20;
    this.aiBonus = 20;
    this.strengthBonus = 15;
  }

  Battledome.BotLab.Android.prototype = new Battledome.BotLab.Robot();

  Battledome.BotLab.Cyborg = function(){
    this.healthBonus = 20;
    this.speedBonus = 10;
    this.aiBonus = 10;
    this.strengthBonus = 30;
  }

  Battledome.BotLab.Cyborg.prototype = new Battledome.BotLab.Robot();

  Battledome.BotLab.Swarm = function(){
    this.healthBonus = 30;
    this.speedBonus = 30;
    this.aiBonus = 20;
    this.stealthBonus = 15;
  }

  Battledome.BotLab.Swarm.prototype = new Battledome.BotLab.Robot();

  let hal = new Battledome.BotLab.Amorphous();
  console.log(hal);

  let sonny = new Battledome.BotLab.Android();
  console.log(sonny);

  let grevious = new Battledome.BotLab.Cyborg();
  console.log(grevious);

  let nanites = new Battledome.BotLab.Swarm();
  console.log(nanites);

})(Battledome || {});
