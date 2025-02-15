//?The reduce method in JavaScript is an array method that executes a reducer function on each element of the array, resulting in a single output value. It is particularly useful for operations such as summing values, flattening arrays, and performing complex transformations on data.
//! array.reduce(callback(accumulator, currentValue, currentIndex, array),initialValue);
//? Parameters:
// callback: A function that executes on each element.
// accumulator: The running total or accumulated result.
// currentValue: The current element being processed.
// currentIndex (optional): The index of the current element.
// array (optional): The original array.
// initialValue (optional): The initial value for the accumulator. If omitted, the first element of the array is used.

//?Counting Occurrences of Elements in an Array
const fruits = ['apple', 'banana', 'apple', 'orange', 'banana', 'apple'];

function counter(fruits) {
    return fruits.reduce((acc, fruit) => {
      acc[fruit] = (acc[fruit] || 0) + 1;
      return acc;
    }, {});
}
const fruitCount = counter(fruits);
console.log(fruitCount);
