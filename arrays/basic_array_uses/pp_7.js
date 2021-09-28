// Using the function from the previous problem, What happens if you pass a count greater than the length of the array?
// How can you fix the function so it returns a new instance of the entire array when count is greater than the array
//  length?

//Write a function like the previous one, except this time return the last count elements as a new array.

function lastNOf(arr, count) {
  let index = arr.length - count;

  if (index < 0) {
    index = 0;
  }

  return arr.slice(index)
}

let digits = [4, 8, 15, 16, 23, 42];
console.log(lastNOf(digits, 9));
digits = [4, 8, 15, 16];
console.log(lastNOf(digits, 3));
