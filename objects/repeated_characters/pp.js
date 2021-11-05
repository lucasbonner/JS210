/*
Implement a function that takes a String as an argument and returns an
object that contains a count of the repeated characters.
*/

function repeatedCharacters(str) {
  let lowerCase = str.toLowerCase();
  let result = {};

  for (let i = 0; i < str.length; i++) {
    if (result[lowerCase[i]]) {
      result[lowerCase[i]] += 1;
    } else {
      result[lowerCase[i]] = 1;
    }
  }

  for (key in result) {
    if (result[key] === 1) {
      delete result[key];
    }
  }
  return result;
}

console.log(repeatedCharacters('Programming'));    // { r: 2, g: 2, m: 2 }
console.log(repeatedCharacters('Combination'));    // { o: 2, i: 2, n: 2 }
console.log(repeatedCharacters('Pet'));            // {}
console.log(repeatedCharacters('Paper'));          // { p: 2 }
console.log(repeatedCharacters('Baseless'));       // { s: 3, e: 2 }