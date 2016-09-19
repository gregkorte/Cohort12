'use strict';

var Battledome = (function(battledome){

  battledome.BotLab = {};

  battledome.BotLab.Robot = function(){
    this.name = "Maximillian's Shell";
    this.health = 10;
    this.adaptability = 10;
    this.attackPts = 10;

    this.toString = function() {
      return this.name;
    }
  }

  battledome.BotLab.Amorphous = function(){
    this.health += 10;
    this.adaptablility += 50;
    this.ai = 30;
    this.stealth = 30;
    this.sentience = 50;

    this.WeaponsAllowed = ['SentryWave', 'LockOut', 'AirLock', 'DeRez', 'AcidGas', 'LightDisc']
  }

  battledome.BotLab.Amorphous.prototype = new Battledome.BotLab.Robot();

  battledome.BotLab.Amorphous.prototype.setWeapon = function(weaponType){
    this.weapon = new Battledome.Armory[weaponType];
  }

  battledome.BotLab.Amorphous.prototype.setMod = function(modType){
    this.mod = modType;
  }

  battledome.BotLab.Hal9000 = function(){
    this.ai += 30;
    this.stealth += 30;
    this.sentience += 50;
    this.malice = '';
  }

  battledome.BotLab.Hal9000.prototype = new Battledome.BotLab.Amorphous();

  battledome.BotLab.MCP = function(){
    this.ai += 20;
    this.stealth -= 5;
    this.sentience += 40;
    this.pride = '';
  }

  battledome.BotLab.MCP.prototype = new Battledome.BotLab.Amorphous();

  battledome.BotLab.RedQueen = function(){
    this.ai += 25;
    this.stealth += 15;
    this.sentience += 25;
    this.fear = '';
  }

  battledome.BotLab.RedQueen.prototype = new Battledome.BotLab.Amorphous();

  battledome.BotLab.Android = function(){
    this.health += 10;
    this.speed = 20;
    this.ai = 20;
    this.strength += 15;
    this.combatMode = '';

    this.WeaponsAllowed = ['RushKick', 'LeapPunch', 'NanoDisruptor', 'UploadVirus', 'LAPD2019Blaster', 'EMPGenerator']
  }

  battledome.BotLab.Droid.prototype = new Battledome.BotLab.Robot();

  battledome.BotLab.Android.prototype.setWeapon = function(weaponType){
    this.weapon = weaponType;
  }

  battledome.BotLab.Amee = function(){
    this.adaptablility = 50;
    this.mobility = 15;
    this.perception = '';
  }

  battledome.BotLab.Amee.prototype = new Battledome.BotLab.Droid();

  battledome.BotLab.TX = function(){
    this.adaptability = 25;
    this.mobility = 15;
    this.bloodLust = '';
  }

  battledome.BotLab.TX.prototype = new Battledome.BotLab.Droid();

  battledome.BotLab.NS5 = function(){
    this.adaptability = 40;
    this.mobility = 15;
    this.ferocity = '';
  }

  battledome.BotLab.NS5.prototype = new Battledome.BotLab.Droid();

  battledome.BotLab.Cyborg = function(){
    this.health += 20;
    this.speed = 10;
    this.ai = 10;
    this.strength += 30;
    this.assault = '';

    this.WeaponsAllowed = ['GhostHack', 'Lightsaber', 'SonicGlaive', 'SuperElectroCrossbow', 'PositronRifle', 'ZastavaCz100']
  }

  battledome.BotLab.Cyborg.prototype = new Battledome.BotLab.Robot();

  battledome.BotLab.Cyborg.prototype.setWeapon = function(weaponType){
    this.weapon = weaponType;
  }

  battledome.BotLab.Cyborg.prototype.setMod = function(modType){
    this.mod = modType;
  }

  battledome.BotLab.Project2501 = function(){
    this.adaptablility = 50;
    this.mobility = 15;
    this.infiltration = '';
  }

  battledome.BotLab.Project2501.prototype = new Battledome.BotLab.Cyborg();

  battledome.BotLab.Grevious = function(){
    this.adaptability = 25;
    this.mobility = 15;
    this.darkSide = '';
  }

  battledome.BotLab.Grevious.prototype = new Battledome.BotLab.Cyborg();

  battledome.BotLab.EVA = function(){
    this.adaptability = 40;
    this.mobility = 15;
    this.berserk = '';
  }

  battledome.BotLab.EVA.prototype = new Battledome.BotLab.Cyborg();

  battledome.BotLab.Swarm = function(){
    this.health += 30;
    this.speed = 30;
    this.ai = 20;
    this.stealth = 15;
    this.damage = '';

    this.WeaponsAllowed = ['TowBomb', 'PlasmaBeam', 'NaniteStream', 'NanoInfection', 'TentacleJolt', '']
  }

  battledome.BotLab.Swarm.prototype = new Battledome.BotLab.Robot();

  battledome.BotLab.Swarm.prototype.setWeapon = function(weaponType){
    this.weapon = weaponType;
  }

  battledome.BotLab.Swarm.prototype.setMod = function(modType){
    this.mod = modType;
  }

  battledome.BotLab.Sentinel = function(){
    this.adaptablility = 20;
    this.mobility = 15;
    this.pursuit = '';
  }

  battledome.BotLab.Sentinel.prototype = new Battledome.BotLab.Swarm();

  battledome.BotLab.Gort = function(){
    this.adaptability = 25;
    this.mobility = 15;
    this.overwhelm = '';
  }

  battledome.BotLab.Gort.prototype = new Battledome.BotLab.Swarm();

  battledome.BotLab.Microbot = function(){
    this.adaptability = 40;
    this.mobility = 15;
    this. shapeshift = '';
  }

  battledome.BotLab.Microbot.prototype = new Battledome.BotLab.Swarm();

  return battledome;

})(Battledome || {});
