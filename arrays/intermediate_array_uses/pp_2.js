// Write a function that takes an array argument and returns a new array that contains all
// the argument's elements in their original order followed by all the argument's elements in reverse order.

function reverseArray(arr) {
  let result = arr;
  for (let i = arr.length - 1; i >= 0; i--) {
    result.push(arr[i])
  }
  return result;
}

let arr = [4, 8, 15, 16, 23, 42];
console.log(reverseArray(arr));