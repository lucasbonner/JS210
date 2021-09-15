//Write a function that takes a string of digits and returns the appropriate number as an integer.
// The string may have a leading + or - sign; if the first character is a +, your function
// should return a positive number; if it is a -, your function should return a negative number.
// If there is no sign, return a positive number.

const DIGITS = {'0' : 0, '1' : 1, '2' : 2, '3' : 3, '4' : 4, '5' : 5, '6' : 6, '7' : 7, '8' : 8, '9' : 9}

function stringToSignedInteger(string) {
  switch (string[0]) {
    case '-':return -stringToInteger(string.slice(1));
    case '+': return stringToInteger(string.slice(1));
    default: return stringToInteger(string);
  }

}

function stringToInteger(string) {
  let value = 0;
  const numbers = stringToNumbers(string);

  for (let i = 0; i < numbers.length; i += 1) {
    value = 10 * value + numbers[i];
  }

  return value;
}

function stringToNumbers(string) {
  let result = [];
  for (let i = 0; i < string.length; i += 1) {
    result.push(DIGITS[string[i]])
  };

  return result
}

console.log(stringToSignedInteger('4321'));      // 4321
console.log(stringToSignedInteger('-570'));      // -570
console.log(stringToSignedInteger('+100'));      // 100