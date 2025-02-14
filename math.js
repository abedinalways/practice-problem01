//! Math.round(x) returns the nearest integer:
console.log(Math.round(4.6));
console.log(Math.round(4.4));

//!Math.ceil(x) returns the value of x rounded up to its nearest integer
console.log(Math.ceil(4.6));
console.log(Math.ceil(4.1));

//!Math.floor(x) returns the value of x rounded down to its nearest integer:
console.log(Math.floor(4.6));

//!Math.pow(x, y) returns the value of x to the power of y:
console.log(Math.pow(11, 2));

//!Math.sqrt(x) returns the square root of x:
console.log(Math.sqrt(81));

//!Math.abs(x) returns the absolute (positive) value of x:
console.log(Math.abs(-4.7));

//!Math.min() and Math.max() can be used to find the lowest or highest value in a list of arguments:
console.log(Math.max(121, 33, 222, 220, 444));
console.log(Math.min(-121, -33, 222, 220, -4));

//!Math.random() returns a random number between 0 (inclusive), and 1 (exclusive):
console.log(Math.random());
//? random number between 1 to 100
console.log(Math.floor(Math.random() * 101));

//!Date
//? Date objects are created with the new Date() constructor.
let date = new Date();
console.log(date);
console.log(new Date('2026-12-28'));
const specificDay = new Date(2026, 11, 25);
console.log(specificDay);
