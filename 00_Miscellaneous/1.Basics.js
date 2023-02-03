// --------------------------------------
// Variables, strings, numbers, floats
// --------------------------------------
// Exercise 1 - Console and constiables

const firstName = "Anders";
const lastName = "Latif";

console.log("my first name is", firstName, "and my last name is", lastName);
console.log(`My first name is ${firstName} and my last name is ${lastName}`);
// EXERCISE
// show in the console
// My first name is Anders and my last name is Latif


// --------------------------------------
// Exercise 2 - Numbers and Strings

const year = "2022";
const number = 1;

// når man bruger Number(year) bruger man klassen constructor
const currentYear = Number(year) + number;
// parseInt er en del af Number-klassen, men blev gjort global, fordi den er så brugbar
const currentYear2 = parseInt(year);
// type coercion - laver year om til et number ved at sætte plus foran
const currentYear3 = +year + number;
console.log(currentYear);

// NaN: not a number
console.log(Number("hello"));
// giver numbers indtil den rammer noget, som ikke er et number
console.log(parseInt("23fdfd2323"));

// Add the year plus the number
// The result should be 2023
// You cannot touch line 1 or 2


// --------------------------------------
