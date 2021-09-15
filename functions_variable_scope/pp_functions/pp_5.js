// With the refactors done for question 3 and 4, we can now use our functions to determine the average of all the numbers
// in an arbitrary array of numbers. Create an array named temperatures and store five temperature values in it.
// Find the average temperature by passing the array to the average function and log the result.

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

let temperatures = [98, 95, 96, 101, 105 ]

console.log(average(temperatures))