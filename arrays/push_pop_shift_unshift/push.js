// Write a function named push that accepts two arguments: an Array and any other value.
// The function should append the second argument to the end of the Array, and return the new length of the Array.

function push(arr, arg) {
  arr[arr.length] = arg;
  return arr.length;
}


let count = [0, 1, 2];
push(count, 3);         // 4
console.log(count);                  // [ 0, 1, 2, 3 ]