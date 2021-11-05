/*
Write a function that takes an array of numbers and returns an array with
the same number of elements, but with each element's value being the running total from the original array.
*/
/*
PEDAC:
Rules:
  create an array of the 'running total' of integers in array
    for example:
      first element: 1
      second element: 5
      third element: 6
    result array: [1, 6(5 + 1),12(6 + 6) ]

PSEUDO:
have a total integer variable
initialize result array
iterate through array, adding to 'total' as you go
  on each iteration push 'total' to result array
return result array

*/

function runningTotal(array) {
  let total = 0;
  let result = [];

  for (let i = 0; i < array.length; i++) {
    total += array[i];
    result.push(total);
  }
  return result;
}

console.log(runningTotal([2, 5, 13]));             // [2, 7, 20]
console.log(runningTotal([14, 11, 7, 15, 20]));    // [14, 25, 32, 47, 67]
console.log(runningTotal([3]));                    // [3]
console.log(runningTotal([]));                     // []
