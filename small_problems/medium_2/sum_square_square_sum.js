/*
Write a function that computes the
difference between the square of the
sum of the first n positive integers
and the sum of the squares of the first n positive integers.
*/

function sumSquareDifference(int) {
  let numbers = [];

  for (let i = 1; i <= int; i++) {
    numbers.push(i);
  }
  let sumOfSquares = 0;
  let sum = numbers.reduce((sum, elem) => {
    sum += elem;
    sumOfSquares += (elem ** 2);
    return sum;
  }, 0) ** 2;

  return sum - sumOfSquares;
}

console.log(sumSquareDifference(3));      // 22 --> (1 + 2 + 3)**2 - (1**2 + 2**2 + 3**2)
console.log(sumSquareDifference(10));     // 2640
console.log(sumSquareDifference(1));      // 0
console.log(sumSquareDifference(100));    // 25164150