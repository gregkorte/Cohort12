'use strict';

var Battledome = (function(battledome){

  battledome.BotLab = {};

  battledome.BotLab.Robot = function(){
    this.name = "Maximillian's Shell";
    this.healthBonus = 0;
    this.strengthBonus = 0;
    this.weapon = '';
    this.mod = '';

    this.toString = function() {
      return this.name;
    }
  }

  battledome.BotLab.Robot.prototype.setWeapon = function(weaponType){
    this.weapon = weaponType;
  }

  battledome.BotLab.Robot.prototype.setMod = function(modType){
    this.mod = modType;
  }

  battledome.BotLab.Amorphous = function(){
    this.healthBonus += 5;
    this.speedBonus = 5;
    this.aiBonus = 30;
    this.stealthBonus = 30;
  }

  battledome.BotLab.Amorphous.prototype = new Battledome.BotLab.Robot();

  battledome.BotLab.Hal9000 = function(){
    this.adaptablilityBonus = 50;
    this.sentientBonus = 0;
  }

  battledome.BotLab.Hal9000.prototype = new Battledome.BotLab.Amorphous();

  battledome.BotLab.MCP = function(){
    this.adaptabilityBonus = 25;
    this.sentientBonus = 0;
  }

  battledome.BotLab.MCP.prototype = new Battledome.BotLab.Amorphous();

  battledome.BotLab.RedQueen = function(){
    this.adaptabilityBonus = 40;
    this.sentientBonus = 0;
  }

  battledome.BotLab.RedQueen.prototype = new Battledome.BotLab.Amorphous();

  battledome.BotLab.Android = function(){
    this.healthBonus += 10;
    this.speedBonus = 20;
    this.aiBonus = 20;
    this.strengthBonus += 15;
  }

  battledome.BotLab.Android.prototype = new Battledome.BotLab.Robot();

  battledome.BotLab.NEXUS6 = function(){
    this.adaptablilityBonus = 50;
    this.mobilityBonus = 15;
  }

  battledome.BotLab.NEXUS6.prototype = new Battledome.BotLab.Android();

  battledome.BotLab.TX = function(){
    this.adaptabilityBonus = 25;
    this.mobilityBonus = 15;
  }

  battledome.BotLab.TX.prototype = new Battledome.BotLab.Android();

  battledome.BotLab.NS5 = function(){
    this.adaptabilityBonus = 40;
    this.mobilityBonus = 15;
  }

  battledome.BotLab.NS5.prototype = new Battledome.BotLab.Android();

  battledome.BotLab.Cyborg = function(){
    this.healthBonus += 20;
    this.speedBonus = 10;
    this.aiBonus = 10;
    this.strengthBonus += 30;
  }

  battledome.BotLab.Cyborg.prototype = new Battledome.BotLab.Robot();

  battledome.BotLab.Project2501 = function(){
    this.adaptablilityBonus = 50;
    this.mobilityBonus = 15;
  }

  battledome.BotLab.Project2501.prototype = new Battledome.BotLab.Cyborg();

  battledome.BotLab.Grevious = function(){
    this.adaptabilityBonus = 25;
    this.mobilityBonus = 15;
  }

  battledome.BotLab.Grevious.prototype = new Battledome.BotLab.Cyborg();

  battledome.BotLab.EVA = function(){
    this.adaptabilityBonus = 40;
    this.mobilityBonus = 15;
  }

  battledome.BotLab.EVA.prototype = new Battledome.BotLab.Cyborg();

  battledome.BotLab.Swarm = function(){
    this.healthBonus += 30;
    this.speedBonus = 30;
    this.aiBonus = 20;
    this.stealthBonus = 15;
  }

  battledome.BotLab.Swarm.prototype = new Battledome.BotLab.Robot();

  battledome.BotLab.Sentinel = function(){
    this.adaptablilityBonus = 50;
    this.mobilityBonus = 15;
  }

  battledome.BotLab.Sentinel.prototype = new Battledome.BotLab.Swarm();

  battledome.BotLab.Gort = function(){
    this.adaptabilityBonus = 25;
    this.mobilityBonus = 15;
  }

  battledome.BotLab.Gort.prototype = new Battledome.BotLab.Swarm();

  battledome.BotLab.Spider = function(){
    this.adaptabilityBonus = 40;
    this.mobilityBonus = 15;
  }

  battledome.BotLab.Spider.prototype = new Battledome.BotLab.Swarm();

  return battledome;

})(Battledome || {});
