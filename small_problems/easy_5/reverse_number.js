/*
Write a function that takes a positive integer as an argument and returns that number with its digits reversed.
*/

function reverseNumber(int) {
  let strArr = String(int).split('').reverse().join('');
  return parseInt(strArr, 10);
}

console.log(reverseNumber(12345));    // 54321
console.log(reverseNumber(12213));    // 31221
console.log(reverseNumber(456));      // 654
console.log(reverseNumber(12000));    // 21 -- Note that zeros get dropped!
console.log(reverseNumber(1));        // 1