/*
  Create a function, Make, that has a property
   of makeName and give it the value of your
   vehicle's make.
 */
function Make(){
  this.makeName = "Nissan"
}

/*
Create a function, Model, to hold the
corresponding property and value
*/
function Model(){
  this.model = "Altima"
}

// Define the prototype of a Model?
Model.prototype = new Make();

// Define a Car
function Car(owner, color){
  this.owner = owner,
  this.color = color
}

// Define the prototype of a Car?
Car.prototype = new Model()

// Create the first car
var first = new Car("Huey", "green");

// Create the second car
var second = new Car("Dewey", "blue");

// Create the third car
var third = new Car("Louie", "red");

console.log(first, second, third)