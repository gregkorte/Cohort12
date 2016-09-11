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

  Battledome.BotLab.Hal9000 = function(){
    this.adaptablilityBonus = 50;
  }

  Battledome.BotLab.Hal9000.prototype = new Battledome.BotLab.Amorphous();

  Battledome.BotLab.MCP = function(){
    this.adaptabilityBonus = 25;
  }

  Battledome.BotLab.MCP.prototype = new Battledome.BotLab.Amorphous();

  Battledome.BotLab.RedQueen = function(){
    this.adaptabilityBonus = 40;
  }

  Battledome.BotLab.RedQueen.prototype = new Battledome.BotLab.Amorphous();

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

  let hal = new Battledome.BotLab.Hal9000();
  console.log(hal);

  let mcp = new Battledome.BotLab.MCP();
  console.log(mcp);

  let red = new Battledome.BotLab.RedQueen();
  console.log(red);

})(Battledome || {});
