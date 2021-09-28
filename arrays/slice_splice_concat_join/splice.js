// Write a function named splice that accepts three arguments: an Array, a start index,
// and the number of values to remove. The function should remove values from the original Array,
// starting with the first index and removing the specified number of values. The function should return
// the removed values in a new Array.

// You may use functions that were answers to previous practice problems to complete this problem,
// but do not use any built-in Array methods.

function splice(arr, start, int) {
  let removedValues = [];
  let counter = 0;
  do {
    removedValues.push(arr[start])
    arr[start] = arr[start + int];
    start += 1
    counter += 1
  } while (counter < int);

  arr.length = arr.length - removedValues.length;
  return removedValues;
}


let count = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(splice(count, 2, 5));                   // [ 3, 4, 5, 6, 7 ]
console.log(count);                                 // [ 1, 2, 8 ]