/*
Write a function that rotates the last n digits of a number.
For the rotation, rotate by one digit
to the left, moving the first digit to the end.
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

console.log(rotateRightmostDigits(735291, 1));      // 735291
console.log(rotateRightmostDigits(735291, 2));      // 735219
console.log(rotateRightmostDigits(735291, 3));      // 735912
console.log(rotateRightmostDigits(735291, 4));      // 732915
console.log(rotateRightmostDigits(735291, 5));      // 752913
console.log(rotateRightmostDigits(735291, 6));      // 352917