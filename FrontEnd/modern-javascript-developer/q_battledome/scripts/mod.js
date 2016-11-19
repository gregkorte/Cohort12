'use strict';

var Battledome = (function(battledome){

  battledome.SciFacility = {};

  battledome.SciFacility.Mod = function(){
    this.defenseDuration = 0;
    this.defenseType = '';
    this.damageReduction = 0;
  }

  battledome.SciFacility.AccessControl = function(){
    this.defenseDuration = 1;
    this.defenseType = 'electrical';
    this.damageReduction = .40;
    this.description = '';
    this.name = '';
  }

  battledome.SciFacility.AccessControl.prototype = new battledome.SciFacility.Mod();

  battledome.SciFacility.SurgeShield = function(){
    this.defenseDuration = 1;
    this.defenseType = 'electrical';
    this.damageReduction = .30;
    this.description = '';
    this.name = '';
  }

  battledome.SciFacility.SurgeShield.prototype = new battledome.SciFacility.Mod();

  battledome.SciFacility.AcquireFunction = function(){
    this.defenseDuration = 1;
    this.defenseType = 'hack';
    this.damageReduction = .10;
    this.description = '';
    this.name = '';
  }

  battledome.SciFacility.AcquireFunction.prototype = new battledome.SciFacility.Mod();

  battledome.SciFacility.XRayVision = function(){
    this.defenseDuration = 1;
    this.defenseType = 'discover';
    this.damageReduction = 1;
    this.description = '';
    this.name = '';
  }

  battledome.SciFacility.XRayVision.prototype = new battledome.SciFacility.Mod();

  battledome.SciFacility.SurgeFilter = function(){
    this.defenseDuration = 3;
    this.defenseType = '';
    this.damageReduction = 1;
    this.description = '';
    this.name = '';
  }

  battledome.SciFacility.SurgeFilter.prototype = new battledome.SciFacility.Mod();

  battledome.SciFacility.MagneticField = function(){
    this.defenseDuration = 3;
    this.defenseType = '';
    this.damageReduction = 1;
    this.description = '';
    this.name = '';
  }

  battledome.SciFacility.MagneticField.prototype = new battledome.SciFacility.Mod();

  battledome.SciFacility.ThermoOpticCamouflage = function(){
    this.defenseDuration = 3;
    this.defenseType = '';
    this.damageReduction = 1;
    this.description = '';
    this.name = '';
  }

  battledome.SciFacility.ThermoOpticCamouflage.prototype = new battledome.SciFacility.Mod();

  battledome.SciFacility.NervRegen = function(){
    this.defenseDuration = 3;
    this.defenseType = '';
    this.damageReduction = 1;
    this.description = '';
    this.name = '';
  }

  battledome.SciFacility.NervRegen.prototype = new battledome.SciFacility.Mod();

  battledome.SciFacility.ATField = function(){
    this.defenseDuration = 3;
    this.defenseType = '';
    this.damageReduction = 1;
    this.description = '';
    this.name = '';
  }

  battledome.SciFacility.ATField.prototype = new battledome.SciFacility.Mod();

  battledome.SciFacility.AudioSensor = function(){
    this.defenseDuration = 3;
    this.defenseType = '';
    this.damageReduction = 1;
    this.description = '';
    this.name = '';
  }

  battledome.SciFacility.AudioSensor.prototype = new battledome.SciFacility.Mod();

  battledome.SciFacility.AppendageArmor = function(){
    this.defenseDuration = 3;
    this.defenseType = '';
    this.damageReduction = 1;
    this.description = '';
    this.name = '';
  }

  battledome.SciFacility.AppendageArmor.prototype = new battledome.SciFacility.Mod();

  battledome.SciFacility.Intelliscan = function(){
    this.defenseDuration = 3;
    this.defenseType = '';
    this.damageReduction = 1;
    this.description = '';
    this.name = '';
  }

  battledome.SciFacility.Intelliscan.prototype = new battledome.SciFacility.Mod();

  return battledome;

})(Battledome || {});