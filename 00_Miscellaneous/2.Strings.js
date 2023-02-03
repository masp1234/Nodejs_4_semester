// --------------------------------------
// Exercise 3 - Add numbers from string to float

const numberOne = "1.10";
const numberTwo = "2.30";

// add those two numbers and show the result
// you cannot touch line 1 neither line 2

const sum = parseFloat(numberOne) + parseFloat(numberTwo);
console.log(sum);


// --------------------------------------


// --------------------------------------
// Exercise 4 - Add the numbers and the total with 2 decimals

const anotherNumberOne = "1.12";
const anotherNumberTwo = "2.35";

const total = (Number(anotherNumberOne) + Number(anotherNumberTwo)).toFixed(2);
const anotherTotal = (parseFloat(anotherNumberOne) + parseFloat(anotherNumberTwo)).toFixed(2);

console.log(total);
console.log(anotherTotal);


// --------------------------------------
// Exercise 5 - Decimals and average

const one = 10;
const two = 45;
const three = 98;

// Show in the console the avg. with 5 decimals

const average = ((one + two + three) / 3).toFixed(5);
console.log(average);




// --------------------------------------
// Exercise 6 - Get the character by index

const letters = "abc";
// Get me the character "c"
const letter = letters[2];
console.log(letter);




// --------------------------------------
// Exercise 7 - Replace

const fact = "You are learning javascript!";


// capitalize the J in Javascript

const result = fact.replace("j", "J");
console.log(result);


// --------------------------------------