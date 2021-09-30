/*
In this exercise, you will implement your own version of the Array.prototype.reverse method.
Your implementation should differ from the built-in method in the following two ways:

    It should accept either a string or an array as an argument.
    It should return a new string or array.
*/

function reverse(inputForReversal) {
  let result = [];

  for (let i = inputForReversal.length - 1; i >= 0; i--) {
    result.push(inputForReversal[i]);
  }

  if (Array.isArray(inputForReversal)) {
    return result;
  }

  return result.join('');
}

console.log(reverse('Hello'));           // "olleH"
console.log(reverse('a'));               // "a"
console.log(reverse([1, 2, 3, 4]));      // [4, 3, 2, 1]
console.log(reverse([]));                // []

const array = [1, 2, 3];
reverse(array);             // [3, 2, 1]
array;                      // [1, 2, 3]
