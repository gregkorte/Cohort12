'use strict';

var Battledome = (function(battledome){

  battledome.Armory = {};

  function damageRoll(max, min){
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  battledome.Armory.Weapon = function(){
    this.attackDuration = 0;
    this.attackPoints = 10;
    this.attackPower = 0;
    this.damage = 0;
  }

  battledome.Armory.SentryWave = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(10, 50);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.SentryWave.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.PowerKill = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(10, 50);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.PowerKill.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.AirLock = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(10, 50);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.AirLock.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.DeRez = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(10, 50);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.DeRez.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.AcidGas = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(10, 50);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.AcidGas.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.LightDisc = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(10, 60);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.LightDisc.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.RushKick = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.RushKick.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.LeapPunch = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.LeapPunch.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.NanoDisrupter = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.NanoDisrupter.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.UploadVirus = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.UploadVirus.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.EmpGenerator = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.EmpGenerator.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.PlasmaCannon = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.PlasmaCannon.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.GhostHack = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.GhostHack.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.LightBlade = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.LightBlade.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.SonicGlaive = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.SonicGlaive.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.ElectroCrossbow = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.ElectroCrossbow.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.PositronRifle = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.PositronRifle.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.ZastavaCz100 = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.ZastavaCz100.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.TowBomb = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.TowBomb.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.PlasmaBeam = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.PlasmaBeam.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.NaniteStream = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.NaniteStream.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.NanoInfection = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.NanoInfection.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.TentacleJolt = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.TentacleJolt.prototype = new Battledome.Armory.Weapon();

  battledome.Armory.MatterSiphon = function(){
    this.attackDuration = 3;
    this.attackPoints -= 3;
    this.attackPower = 20;
    this.attackType = '';
    this.damage = damageRoll(x, y);
    this.description = '';
    this.name = '';
    this.toSave = '';
  }

  battledome.Armory.MatterSiphon.prototype = new Battledome.Armory.Weapon();

  return battledome;

})(Battledome || {});
