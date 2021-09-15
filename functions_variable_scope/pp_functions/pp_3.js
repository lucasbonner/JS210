// Suppose we have a bunch of values for which we want to calculate an average.
// Our current average function only takes three numbers; we might need to write additional functions
// if we want to work with different numbers of data points. A better solution, though, is to change the function to
// accept an array of arbitrary length. We can calculate the average by looping over the array elements to calculate the total,
// then divide by the array length.

// Create a variable named total with an initial value of 0 at the start of the average function.
// Use a for loop to iterate over all the elements in the array. With each iteration, add the element's value
// to the total. When the loop finishes, return the total divided by the array's length. Call average with an array of five numbers
// and log the result.

function average(arr) {
  let total = 0

  for (let i = 0; i < arr.length; i++) {
    total += arr[i]
  }
  return (total/arr.length)
}

function sum(a, b, c) {
  return (a + b + c);
}

console.log(average([1, 2, 3, 4, 5]))