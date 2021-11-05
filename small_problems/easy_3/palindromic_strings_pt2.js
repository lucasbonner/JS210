/*
Write another function that returns true if the string passed as an argument
is a palindrome, or false otherwise. This time, however, your function should
be case-insensitive, and should ignore all non-alphanumeric characters. If you wish,
you may simplify things by calling the isPalindrome function you wrote in the previous exercise.
*/
const ALPH = 'abcdefghijklmnopqrstuvwxyz'.split('');
const NUM = '1234567890'.split('');

function isRealPalindrome(str) {
  str = str.toLowerCase();
  let newStr = "";

  for (let i = 0; i <= str.length; i++) {
    if ((ALPH.includes(str[i])) || (NUM.includes(str[i]))) {
      newStr += str[i];
    }
  }
  return newStr.split('').reverse().join('') === newStr;
}

console.log(isRealPalindrome('madam'));               // true
console.log(isRealPalindrome('Madam'));               // true (case does not matter)
console.log(isRealPalindrome("Madam, I'm Adam"));     // true (only alphanumerics matter)
console.log(isRealPalindrome('356653'));              // true
console.log(isRealPalindrome('356a653'));             // true
console.log(isRealPalindrome('123ab321'));            // false
