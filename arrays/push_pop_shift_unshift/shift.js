// Write a function named shift that accepts one argument: an Array.
// The function should remove the first value from the beginning of the Array and return it.

function shift(arr) {
  let first = arr[0];

  if (arr.length === 0) {
    return undefined;
  }

  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i + 1];
  }

  arr.length = arr.length - 1;
  return first;
}

let count = [1, 2, 3];
console.log(shift(count));           // 1
console.log(count);                  // [ 2, 3 ]

let ya = [1, 4, 5, 6, 7, 8, 9];
let mm = [6, 7, 8];
let nn = ['dog', 'cat', 'RAT'];
shift(ya);
shift(mm);
shift(nn);

console.log(ya);
console.log(mm);
console.log(nn);