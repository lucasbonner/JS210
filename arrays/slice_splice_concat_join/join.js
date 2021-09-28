// Write a function named join that accepts two arguments:
// an Array and a String. The function should coerce each value in the Array to a String, and
// then join those values together using the second argument as a separator. You may assume that a
// separator will always be passed.

// You can call the String function on any JavaScript value to get its String representation.

function join(arr, suffix) {
  let result = "";
  for (let i = 0; i < arr.length; i++) {
    if (i === arr.length - 1) {
      result += arr[i]
    } else {
      result += (arr[i] + suffix)
    }
  }

  return result;
}

console.log(join(['bri', 'tru', 'wha'], 'ck '));       // 'brick truck wha'
console.log(join([1, 2, 3], ' and '));                 // '1 and 2 and 3'