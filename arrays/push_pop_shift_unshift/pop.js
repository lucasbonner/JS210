// Write a function named pop that accepts one argument: an Array.
// The function should remove the last element from the array and return it.

function pop(arr) {
  if (arr.length === 0) {
    return undefined;
  }

  let last = arr[arr.length - 1];
  arr.length = (arr.length - 1);
  return last;
}

let count = [1, 2, 3];
console.log(pop(count));             // 3
console.log(count);                  // [ 1, 2 ]
