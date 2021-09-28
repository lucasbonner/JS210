// Write a function lastIndexOf that accepts two arguments: an array and a value.
// The function returns the last index at which the value can be found in the array, or -1
// if the value is not present.

function lastIndexOf(arr, value) {
  let result = -1;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) {
      result = i;
    }
  }
  return result;
}


console.log(lastIndexOf([1, 2, 3, 3], 3));     // 3
console.log(lastIndexOf([1, 2, 3], 4));        // -1