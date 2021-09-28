// Write a function named concat that accepts two Array arguments.
// The function should return a new Array that contains the values from each of the original Arrays.

function concat(arr1, arr2) {
  let result = [];

  for (let i = 0; i < arr1.length; i++) {
    result.push(arr1[i]);
  }

  for (let i = 0; i < arr2.length; i++) {
    result.push(arr2[i]);
  }

  return result;
}



console.log(concat([1, 2, 3], [4, 5, 6]));       // [ 1, 2, 3, 4, 5, 6 ]
console.log(concat([1], [1, 2, 3, 4, 5]))