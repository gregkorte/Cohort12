var num1 = document.getElementById('num1');
var num2 = document.getElementById('num2');
var addBtn = document.getElementById('add');
var subBtn = document.getElementById('subtract');
var mulBtn = document.getElementById('multiply');
var divBtn = document.getElementById('divide');
var output = document.getElementById('output');

addBtn.addEventListener('click', function(){
  output.innerHTML = calculate(num1.value, num2.value, add)
  clearInputs();
})

subBtn.addEventListener('click', function(){
  output.innerHTML = calculate(num1.value, num2.value, subtract)
  clearInputs();
})

mulBtn.addEventListener('click', function(){
  output.innerHTML = calculate(num1.value, num2.value, multiply)
  clearInputs();
})

divBtn.addEventListener('click', function(){
  output.innerHTML = calculate(num1.value, num2.value, divide)
  clearInputs();
})

/*
  Create a function that multiplies two numbers
  passed in as arguments. Return the product.
 */
function multiply(a, b){
  return a * b;
}

/*
  Create a function that adds two numbers
  passed in as arguments. Return the sum.
 */
function add(a, b){
  return parseInt(a) + parseInt(b);
}

/*
  Create a function that subtracts two numbers
  passed in as arguments. Return the difference.
 */
function subtract(a, b){
  return a - b;
}

/*
  Create a function that divides two numbers
  passed in as arguments. Return the quotient.
 */
function divide(a, b){
  return (a / b).toFixed(2);
}

/*
  Create a function that accepts three arguments.
    1. First number
    2. Second number
    3. A function that performs an operation

  Return the value of the operation.
 */
 function calculate(a, b, operation){
  return operation(a, b);
 }

 function clearInputs(){
  num1.value = '';
  num2.value = '';
 }