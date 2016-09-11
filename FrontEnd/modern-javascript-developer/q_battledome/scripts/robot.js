'use strict';

var Battledome = (function(battledome){

  battledome.BotLab = {};

  battledome.BotLab.Robot = function(){
    this.name = "Maximillian's Shell";
    this.healthBonus = 0;
    this.strengthBonus = 0;

    this.toString = function() {
      return this.name;
    }
  }

  battledome.BotLab.Amorphous = function(){
    this.healthBonus = 5;
    this.speedBonus = 5;
    this.aiBonus = 30;
    this.stealthBonus = 30;
  }

  battledome.BotLab.Amorphous.prototype = new Battledome.BotLab.Robot();

  battledome.BotLab.Hal9000 = function(){
    this.adaptablilityBonus = 50;
    this.mobilityBonus = 0;
  }

  battledome.BotLab.Hal9000.prototype = new Battledome.BotLab.Amorphous();

  battledome.BotLab.MCP = function(){
    this.adaptabilityBonus = 25;
    this.mobilityBonus = 0;
  }

  battledome.BotLab.MCP.prototype = new Battledome.BotLab.Amorphous();

  battledome.BotLab.RedQueen = function(){
    this.adaptabilityBonus = 40;
    this.mobilityBonus = 0;
  }

  battledome.BotLab.RedQueen.prototype = new Battledome.BotLab.Amorphous();

  battledome.BotLab.Android = function(){
    this.healthBonus = 10;
    this.speedBonus = 20;
    this.aiBonus = 20;
    this.strengthBonus = 15;
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
    this.healthBonus = 20;
    this.speedBonus = 10;
    this.aiBonus = 10;
    this.strengthBonus = 30;
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
    this.healthBonus = 30;
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

  // let hal = new Battledome.BotLab.Hal9000();
  // console.log(hal);

  // let mcp = new Battledome.BotLab.MCP();
  // console.log(mcp);

  // let red = new Battledome.BotLab.RedQueen();
  // console.log(red);

  // let nex = new Battledome.BotLab.NEXUS6();
  // console.log(nex);

  // let tx = new Battledome.BotLab.TX();
  // console.log(tx);

  // let ns5 = new Battledome.BotLab.NS5();
  // console.log(ns5);

  // let pro = new Battledome.BotLab.Project2501();
  // console.log(pro);

  // let gre = new Battledome.BotLab.Grevious();
  // console.log(gre);

  // let eva = new Battledome.BotLab.EVA();
  // console.log(eva);

  // let sen = new Battledome.BotLab.Sentinel();
  // console.log(sen);

  // let gor = new Battledome.BotLab.Gort();
  // console.log(gor);

  // let spi = new Battledome.BotLab.Spider();
  // console.log(spi);

  return battledome;

})(Battledome || {});
