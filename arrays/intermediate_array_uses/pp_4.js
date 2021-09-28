//Write a function that takes an array of arrays as an argument,
// and returns a new array that contains the sums of each of the sub-arrays.

//PEDAC
//input: array of arrays
//output: array of sums (sums of nested arrays)

//have result array
//have value sum set to 0
//iterate thru nested array
// at each index, iterate through array incrementing sum value
//add sum to result array
//set sum value back to 0

function matrixSums(arr) {
  let result = [];
  let sum = 0;

  for (let i = 0; i < arr.length; i++) {
    arr[i].forEach(element => sum += element);
    result.push(sum);
    sum = 0;
  }
  return result;
}

console.log(matrixSums([[2, 8, 5], [12, 48, 0], [12]]));  // returns [15, 60, 12]