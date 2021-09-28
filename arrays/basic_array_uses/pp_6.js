//Write a function like the previous one, except this time return the last count elements as a new array.

function lastNOf(arr, count) {
  return arr.slice(arr.length - count);
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 3));    // returns [16, 23, 42]
digits = [4, 8, 15, 16, 23, 42, 6, 7, 3, 2, 1, 99, 100, 50];
console.log(lastNOf(digits, 2));
