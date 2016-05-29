function Vehicle() {
  this.tires = [];
}

/*
  Create a function named Car with one property named `manufactured_date`
 */

function Car() {
  this.manufactured_date = Date.now();
}

Car.prototype = new Vehicle();

/*
  Create a function named Make.
  Set its prototype to the Car function.
  Define a property `manufacaturer` with a default value of empty string.
 */

function Make() {
  this.manufacturer = '';
}

Make.prototype = new Car();
Make.prototype.setManufacturer = function(manufacturer){
  this.manufacturerName = manufacturer;
}

/*
    Create a function named Model.
    Set its prototype to the Make function.
    Define a property `modelName` with a default value of empty string.
*/

function Model(name) {
  this.modelName = name;
}

Model.prototype = new Make();
Model.prototype.setColor = function(color){
  this.color = color;
}

/*
    Create a new Make object - your favorite one (e.g. Mini)
*/

var civic = new Model('civic');
civic.setManufacturer('honda');
civic.setColor('black');

/*
    Create a new Model object of your favorite model (e.g. Clubman)
*/


/*
    Being an avid car collector, you own three different cars all of
    same model from your favorite manufacturer.

    Create three new objects for each of your three favorite cars.
*/


/*
    Being a rich, avid car collector, you own 2 cars from your second
    favorite manufacturer. You also one 1 car from your third favorite
    manufacturer.
*/

function Tire() {}

function Pirelli() {}
Pirelli.prototype = new Tire();

function PExtreme() {}
PExtreme.prototype = new Pirelli();

function PExtreme55() {}
PExtreme55.prototype = new Pirelli();

function PAwesome() {}
PAwesome.prototype = new Pirelli();

var Tire1 = new PExtreme();
var Tire2 = new PExtreme();
var Tire3 = new PExtreme55();
var Tire4 = new PExtreme55();

civic.tires.push(Tire1, Tire2, Tire3, Tire4);
console.log('civic', civic);
console.log('civic.tires', civic.tires)