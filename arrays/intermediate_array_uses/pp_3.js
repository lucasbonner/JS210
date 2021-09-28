// Use the array sort method to create a function that takes an array of numbers and returns
//  a new array of the numbers sorted in descending order. Do not alter the original array.

function sortDescending(arr) {
  let result = arr.slice();
  return result.sort((a, b) => (b - a));
}

let array = [23, 4, 16, 42, 8, 15];
let result = sortDescending(array);  // returns [42, 23, 16, 15, 8, 4]
console.log(result);                 // logs    [42, 23, 16, 15, 8, 4]
console.log(array);                  // logs    [23, 4, 16, 42, 8, 15]