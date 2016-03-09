var transformers = [];

function Transformer(faction){
  this.faction = faction;
}

function Autobot(name, type, make, model){
  this.name = name,
  this.type = type,
  this.make = make,
  this.model = model
}

Autobot.prototype = new Transformer('Autobot');

function Decepticon(name, type, make, model){
  this.name = name,
  this.type = type,
  this.make = make,
  this.model = model
}

Decepticon.prototype = new Transformer('Decepticon');

var optimusPrime = new Autobot('Optimus Prime', 'Tractor trailer truck', 'Freightliner', 'COE 1980');

var bluestreak = new Autobot('Bluestreak', 'Car', 'Datsun', 'Fairlady 280ZX')

transformers.push(optimusPrime, bluestreak)
console.log(transformers);


//Optimus Prime is the Autobot Commander and transforms into a tractor trailer truck, specifically a Freightliner COE 1980. The toy consists of three separate parts while in its robot form; the main figure, which transforms from the cabin of the truck, an Autobot Headquarters, which transforms from the tractor trailer, serves as a combat deck, and includes a mechanic/artillery robot, and a small scout car named Roller, which launches from the Autobot Headquarters.[5]

//The eleven Autobot cars consist of Bluestreak, Hound, Ironhide, Jazz, Mirage, Prowl, Ratchet, Sideswipe, Sunstreaker, Trailbreaker, and Wheeljack.[6] Bluestreak, the gunner, transforms into a Datsun Fairlady 280ZX;[7] Hound, the scout, transforms into a Mitsubishi J59 Jeep;[8] Ironhide, who serves as security, transforms into a 1980 Nissan Onebox Cherry Vanette;[9] Jazz, the special operations expert, transforms into a 1981 Porsche 935 Turbo;[9] Mirage, the spy, transforms into a Ligier JS11 Formula 1 Racer;[10] Prowl, the military strategist, transforms into a Datsun Fairlady 280ZX Police Cruiser;[11] Ratchet, the medic, transforms into a Nissan Onebox Ambulance Vanette;[12] Sideswipe, a warrior, transforms into a Lamborghini Countach prototype crafted from the LP500S model;[13] Sunstreaker, who is Sideswipe's twin brother, and is also a warrior, transforms into a Lamborghini Countach LP500S;[14] Trailbreaker, the defense strategist, transforms into a Toyota Hi-Lux 4WD;[15] and Wheeljack, the mechanical engineer, transforms into a Lancia Stratos Turbo #539 "Alitallia".[16]

//The six Autobot minicars consist of Brawn, Bumblebee, Cliffjumper, Gears, Huffer, and Windcharger.[17] Brawn, who serves in demolitions, transforms into a Land Rover Defender 4x4;[18] Bumblebee, who serves in espionage, transforms into a Classic Volkswagen Beetle;[18] Cliffjumper, a warrior, transforms into a Porsche Turbo 924;[19] Gears, who serves as a transport and in reconnaissance, transforms into a 4WD off road truck;[19] Huffer, the construction engineer, transforms into the cabin of a semi truck;[20] and Windcharger, a warrior, transforms into a Pontiac Firebird Trans Am.[20]