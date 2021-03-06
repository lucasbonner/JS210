/*
Given a string of words separated by spaces, write a function that swaps the first and last letters of every word.

You may assume that every word contains at least one letter, and that the string will
 always contain at least one word. You may also assume that each string contains nothing but words and spaces,
 and that there are no leading, trailing, or repeated spaces.
*/
function swapWord(word) {
  let firstLetter = word[0];
  let lastLetter = word[word.length - 1];

  let array = word.split('');
  array[array.length - 1] = firstLetter;
  array[0] = lastLetter;
  return array.join('');
}

function swap(str) {
  let array = str.split(' ');
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(swapWord(array[i]));
  }
  return result.join(' ');
}

console.log(swap('Oh what a wonderful day it is'));  // "hO thaw a londerfuw yad ti si"
console.log(swap('Abcde'));                          // "ebcdA"
console.log(swap('a'));                              // "a"