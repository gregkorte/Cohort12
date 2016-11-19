'use strict';

var Battledome = (function(battledome){

  battledome.BotLab = {};

  battledome.BotLab.Robot = function(){
    this.name = "Maximillian's Shell";
    this.health = 10;
    this.adaptability = 10;
    this.attackPoints = 0;
    this.toHit = 0;

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

    this.WeaponsAllowed = ['SentryWave', 'LockOut', 'AirLock', 'DeRez', 'AcidGas', 'LightDisc'];
    this.ModsAllowed = ['AccessControl', 'SurgeShield', 'AcquireFunction'];
  }

  battledome.BotLab.Amorphous.prototype = new Battledome.BotLab.Robot();

  battledome.BotLab.Amorphous.prototype.setWeapon = function(weaponType, weaponNum){
    let prop = `weapon${weaponNum}`;
    this[prop] = new Battledome.Armory[weaponType];
  }

  battledome.BotLab.Amorphous.prototype.setMod = function(modType, modNum){
    let prop = `mod${modNum}`;
    this[prop] = new Battledome.SciFacility[modType];
  }


  battledome.BotLab.Hal9000 = function(){
    this.name = 'Hal9000';
    this.image = 'assets/images/bots/hal9000.jpg';
    this.ai += 30;
    this.stealth += 30;
    this.sentience += 50;
    this.malice = '';
  }

  battledome.BotLab.Hal9000.prototype = new Battledome.BotLab.Amorphous();

  battledome.BotLab.MCP = function(){
    this.name = 'Master Control Program';
    this.image = 'assets/images/bots/Master_control_program.jpg';
    this.ai += 20;
    this.stealth -= 5;
    this.sentience += 40;
    this.pride = '';
  }

  battledome.BotLab.MCP.prototype = new Battledome.BotLab.Amorphous();

  battledome.BotLab.RedQueen = function(){
    this.name = 'The Red Queen';
    this.image = 'assets/images/bots/Red_Queen_AI.jpg';
    this.ai += 25;
    this.stealth += 15;
    this.sentience += 25;
    this.fear = '';
  }

  battledome.BotLab.RedQueen.prototype = new Battledome.BotLab.Amorphous();

  battledome.BotLab.Droid = function(){
    this.health += 10;
    this.speed = 20;
    this.ai = 20;
    this.strength += 15;
    this.combatMode = '';

    this.WeaponsAllowed = ['RushKick', 'LeapPunch', 'NanoDisruptor', 'UploadVirus', 'LAPD2019Blaster', 'EMPGenerator'];
    this.ModsAllowed = ['xRayVision', 'SurgeFilter', 'MagnoField'];
  }

  battledome.BotLab.Droid.prototype = new Battledome.BotLab.Robot();

  battledome.BotLab.Droid.prototype.setWeapon = function(weaponType, weaponNum){
    let prop = `weapon${weaponNum}`;
    this[prop] = new Battledome.Armory[weaponType];
  }

  battledome.BotLab.Droid.prototype.setMod = function(modType, modNum){
    let prop = `mod${modNum}`;
    this[prop] = new Battledome.SciFacility[modType];
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

    this.WeaponsAllowed = ['GhostHack', 'Lightsaber', 'SonicGlaive', 'SuperElectroCrossbow', 'PositronRifle', 'ZastavaCz100'];
    this.ModsAllowed = ['ThermoOpticCamouflage', 'NervRegen', 'ATField'];
  }

  battledome.BotLab.Cyborg.prototype = new Battledome.BotLab.Robot();

  battledome.BotLab.Cyborg.prototype.setWeapon = function(weaponType, weaponNum){
    let prop = `weapon${weaponNum}`;
    this[prop] = new Battledome.Armory[weaponType];
  }

  battledome.BotLab.Cyborg.prototype.setMod = function(modType, modNum){
    let prop = `mod${modNum}`;
    this[prop] = new Battledome.SciFacility[modType];
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

    this.WeaponsAllowed = ['TowBomb', 'PlasmaBeam', 'NaniteStream', 'NanoInfection', 'TentacleJolt', ''];
    this.ModsAllowed = ['audioSensor', 'appendageArmor', 'IntellliScan'];
  }

  battledome.BotLab.Swarm.prototype = new Battledome.BotLab.Robot();

  battledome.BotLab.Swarm.prototype.setWeapon = function(weaponType, weaponNum){
    let prop = `weapon${weaponNum}`;
    this[prop] = new Battledome.Armory[weaponType];
  }

  battledome.BotLab.Swarm.prototype.setMod = function(modType, modNum){
    let prop = `mod${modNum}`;
    this[prop] = new Battledome.SciFacility[modType];
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
