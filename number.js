const score = 400;

//Number => it is a wrapper object that can be used to represent numbers in JavaScript.  
const balance = new Number(1000);
// console.log(balance);

// length => it is a property of string object that returns the length of the string.
// toString() => it is a method that converts a number to a string.
// toFixed() => it is a method that formats a number using fixed-point notation.it gives the number of digits after the decimal point.

// console.log(typeof(score.toString()))
// console.log(score.toString().length);
// console.log(`The balance is ${balance.toFixed(3)}`); 


// precision => it is a method that formats a number to a specified length.

const anotherNumber = 123.434;
//console.log(anotherNumber.toPrecision(4))


// toLocaleString() => it is a method that returns a string with a language-sensitive representation of the number.
const amount = 10000000000000;
// console.log(`the amount is ${amount.toLocaleString('en-IN')}`); 


// toExponential() => it is a method that returns a string representing the number in exponential notation.

// console.log(`the exponetial value is ${amount.toExponential()}`)

// *************************************** Maths **************************

// Math is a built-in object that has properties and methods for mathematical constants and functions.

// console.log(`the value of PI is ${Math.PI}`);
// console.log(`the value of E is ${Math.E}`);
// console.log(`the round of value is ${Math.round(4.7)}`);

// ceil => it is a method that returns the smallest integer greater than or equal to a given number.
//flor => it is a method that returns the largest integer less than or equal to a given number.
// random => it is a method that returns a random number between 0 and 1.

// console.log(`the random value is ${Math.floor(Math.random()*10)}`)




