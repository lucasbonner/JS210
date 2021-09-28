// Write a function that takes a sorted array of integers as an argument, and
// returns an array that includes all the missing integers (in order) between the first and
// last elements of the argument.

/*
PEDAC

DATA:
input -> array
output -> array

RULES:
return an array of all missing numbers from 1st to last element
ex.
-3, -2, 1, 5
-3, -2, -1(MISSING), 0(MISSING), 1, 2(MISSING), 3(MISSING), 4(MISSING)
answer -> [-1, 0, 2, 3, 4]

exclusive, NOT including start or end integer


PSEUDO//ALGO
declare variable start to first integer in array
declare variable last to last integer in array
declare variable result to empty array

loop from first to last
  if element not present in input array,
  add to result

return result


*/


function missing(arr) {
  let start = arr[0];
  let last = arr[arr.length - 1];
  let result = [];

  for (let i = start; i < last; i++) {
    if (arr.indexOf(i) === -1) {
      result.push(i);
    }
  }
  return result;
}

console.log(missing([-3, -2, 1, 5]));                  // [-1, 0, 2, 3, 4]
console.log(missing([1, 2, 3, 4]));                    // []
console.log(missing([1, 5]));                          // [2, 3, 4]
console.log(missing([6]));                             // []