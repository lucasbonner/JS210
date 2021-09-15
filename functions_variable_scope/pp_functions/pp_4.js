// We should make the same changes to the sum function so we can continue to use it from the average function.
// Since we've already written that functionality in average, we can just move it from there to sum. Move everything
// from average into sum, except for the final return statement. The sum function should return the total, and average
// should call the sum function with the same values, then divide the return value by the array length, and return it.

// As before, call average with an array of five numbers and log the result.

function average(arr) {
  return (sum(arr)/arr.length)
}

function sum(arr) {
  let total = 0

  for (let i = 0; i < arr.length; i++) {
    total += arr[i];
  };
  return total;
}

console.log(average([1, 2, 3, 4, 5]))