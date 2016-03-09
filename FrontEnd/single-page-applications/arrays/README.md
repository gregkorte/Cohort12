# Arrays

## Chaining Array Methods

#### Instructions

Using one single line of JavaScript code, complete the following tasks on the array of integers below.

1. Sort the numbers in descending order (10, 9, 8, 7, etc).
1. Remove any integers greater than 19.
1. Multiply each remaining number by 1.5 and then substract 1.
1. Then output (either in the DOM or the console) the sum of all the resulting numbers.
```
var integers = [13, 25, 6, 3, 11, 2, 18, 7, 21, 1, 29, 20, 12, 8];
```

## String Manipulation

#### Instructions

1. Copy the code below into the JavaScript file
1. In your HTML, create an text input and a button.
1. The text input should only accept letters. No numbers.
1. Implement the logic in the reversal function that reverses the order of the characters in the string, and outputs the result in the DOM, below the text input.
1. Implement the logic in the alphabits function that return the characters in alphabetical order, and outputs the result in the DOM, below the text input.
1. Implement the logic in the palindrome function that determine whether the string is a palindrome. If it is, display the text "Your string is a palidrome" in the DOM, below the text input.
1. When the user presses the enter key in the text input, or clicks the button, set the value of the testString variable (see below) to the value of the input.
1. The output of each of the functions should immediately appear as well.
```
function reversal() {

}

function alphabits() {

}

function palindrome() {

}

var testString = "";
reversal(testString);
alphabits(testString);
palindrome(testString);
```

## Solar System

#### Instruction

1. Copy the code below into the JavaScript file, and follow the instructions in the comments.
var planets = ["mercury", "venus", "earth", "mars", "jupiter", "saturn", "uranus", "neptune"];

```
/* 
 Use the forEach method to add the name of each planet
 to a div element in your HTML with an id of "planets".
*/
var el = document.getElementById("planets");

// Use the map method to create a new array where the first letter of each planet is capitalized

// Use the filter method to create a new array that contains planets with the letter 'e'

// Use the reduce method to create a sentence from the words in the following array

var words = ["The", "early", "bird", "might", "get", "the", "worm", "but", "the", "second", "mouse", "gets", "the", "cheese"];
```