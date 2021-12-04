/*
Take the number 735291 and rotate it by one digit to the left, getting 352917.
Next, keep the first digit fixed in place and
rotate the remaining digits to get 329175.
Keep the first two digits fixed in place and rotate again to get 321759.
Keep the first three digits fixed in place and
rotate again to get 321597. Finally,
 keep the first four digits fixed
 in place and rotate the final two digits
 to get 321579. The resulting number is
 called the maximum rotation of the original number.

Write a function that takes an integer as an argument and returns the maximum
rotation of that integer. You can (and probably should) use the
rotateRightmostDigits function from the previous exercise.
*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }
  let firstElement = arr[0];
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  result.push(firstElement);
  return result;
}

function rotateRightmostDigits(number, n) {
  let arr = String(number).split('');
  let rotated = rotateArray(arr.slice(arr.length - n));
  let restOfArray = arr.splice(0, arr.length - rotated.length);
  return [restOfArray, rotated].flat();
}

function maxRotation(integer) {
  let result;
  let arr = String(integer).split('');
  let length = arr.length;

  do {
    arr = rotateRightmostDigits(Number(arr.join('')), length);
    length -= 1;
  } while (length >= 0);
  return Number(arr.join(''));
}

console.log(maxRotation(735291));          // 321579
console.log(maxRotation(3));               // 3
console.log(maxRotation(35));              // 53
console.log(maxRotation(105));             // 15 -- the leading zero gets dropped
console.log(maxRotation(8703529146));      // 7321609845