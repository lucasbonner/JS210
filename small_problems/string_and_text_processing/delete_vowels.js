/*
Write a function that takes an
array of strings and returns an
array of the same string values, but with all vowels (a, e, i, o, u) removed.
*/
function removeVowels(arr) {
  return arr.map(string => {
    return string.split('').filter((elem) => !elem.match(/[aeiou]/i)).join('');
  });
}


console.log(removeVowels(['abcdefghijklmnopqrstuvwxyz']));         // ["bcdfghjklmnpqrstvwxyz"]
console.log(removeVowels(['green', 'YELLOW', 'black', 'white']));  // ["grn", "YLLW", "blck", "wht"]
console.log(removeVowels(['ABC', 'AEIOU', 'XYZ']));                // ["BC", "", "XYZ"]