// Write a function named unshift that accepts two arguments: an Array and a value.
// The function should insert the value at the beginning of the Array, and return the new length of the array.
// You will need a for loop for this problem.

function unshift(arr, value) {
  for (let i = arr.length; i > 0; i--) {
    arr[i] = arr[i - 1]
  }

  arr[0] = value;
  return arr.length;
}

let count = [1, 2, 3];
console.log(unshift(count, 0));      // 4
console.log(count);                  // [ 0, 1, 2, 3 ]