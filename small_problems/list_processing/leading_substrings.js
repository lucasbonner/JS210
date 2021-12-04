/*
Write a function that takes a string argument and
returns a list of substrings of that string.
Each substring should begin with the first letter of
the word, and the list should be ordered from shortest to longest.
*/

function leadingSubstrings(str) {
  let strArr = str.split('');
  let iterator = '';
  let result = [];

  for (let i = 0; i < strArr.length; i++) {
    iterator += strArr[i];
    result.push(iterator);
  }
  console.log(result);
}

leadingSubstrings('abc');      // ["a", "ab", "abc"]
leadingSubstrings('a');        // ["a"]
leadingSubstrings('xyzzy');    // ["x", "xy", "xyz", "xyzz", "xyzzy"]
