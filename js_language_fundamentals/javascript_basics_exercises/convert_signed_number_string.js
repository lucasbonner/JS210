const DIGITS = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];

function signedIntegerToString(integer) {
  if (integer > 0) {
    let answer = integerToString(integer);
    return '+' + answer;
  } else if (integer < 0) {
    let answer = integerToString((integer/-1));
    return '-' + answer;
  } else {
    let answer = integerToString(integer);
    return answer;
  }
}

function integerToString(number) {
  let result = ''

  do {
    let remainder = number % 10;
    number = Math.floor(number/10);

    result = DIGITS[remainder] + result;
  } while (number > 0);

  return result;
}

console.log(signedIntegerToString(4321));      // "+4321"
console.log(signedIntegerToString(-123));      // "-123"
console.log(signedIntegerToString(0));         // "0"