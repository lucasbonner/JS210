// Write a function that takes two strings as arguments, determines the length of the two strings,
// and then returns the result of concatenating the shorter string, the longer string, and the shorter string once again.
// You may assume that the strings are of different lengths.

function shortLongShort(str1, str2) {
  let longStr = "";
  let shortStr = "";

  if (str1.length > str2.length) {
    longStr = str1;
    shortStr = str2;
  } else {
    longStr = str2;
    shortStr = str1;
  }

  return shortStr + longStr + shortStr;
}



console.log(shortLongShort('abc', 'defgh'));    // "abcdefghabc"
console.log(shortLongShort('abcde', 'fgh'));    // "fghabcdefgh"
console.log(shortLongShort('', 'xyz'));         // "xyz"
