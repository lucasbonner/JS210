/*
Write a function that takes a non-empty string argument and
returns the middle character(s) of the string. If the string has an odd length,
you should return exactly one character. If the string has an even length, you should return exactly two characters.
*/
/*
Pedac:
return middle character
if str.length -> odd (return one) if even ->return 2

str = 'I Love JavaScript'
str.length = 17 (odd)
str.length % 2 === 0 (false)
Math.floor(str.length/2) -> a

str = 'Launchschool'
str.length = 12 (even)
str.length % 2 === 0 (true)
str.length /2 -> 6
str[6] -> 's'
str.slice(5, 7) -> 'hs'

*/
function centerOf(str) {
  let length = Math.floor(str.length / 2);
  let even = (str.length % 2 === 0);
  let result = even ? str.slice((length - 1), (length + 1)) : str[length];
  return result;
}

console.log(centerOf('I Love JavaScript')); // "a"
console.log(centerOf('Launch School'));     // " "
console.log(centerOf('Launch'));            // "un"
console.log(centerOf('Launchschool'));      // "hs"
console.log(centerOf('x'));                 // "x"