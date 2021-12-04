/*
B:O   X:K   D:Q   C:P   N:A
G:T   R:E   F:S   J:W   H:U
V:I   L:Y   Z:M

This limits the words you can spell with the blocks
 to only those words that do not use both letters
 from any given block. You can also only use each block once.

Write a function that takes a word string as an
argument and returns true if the word can be
spelled using the set of blocks, false otherwise.
You can consider the letters to be case-insensitive when you apply the rules.
*/

function isBlockWord(str) {
  let letterBlocks = [['B', 'O'], ['X', 'K'], ['D', 'Q'], ['C', 'P'], ['N', 'A'], [
    'G', 'T'], ['R', 'E'], ['F', 'S'], ['J', 'W'], ['H', 'U'], ['V', 'I'], ['L', 'Y'], ['Z', 'M']];
  let length = letterBlocks.length;
  let result = true;

  let strArr = str.split('');
  strArr.forEach(elem => {
    length = letterBlocks.length;
    letterBlocks = letterBlocks.filter(subarr => !subarr.includes(elem.toUpperCase()));
    if (length === letterBlocks.length) {
      result = false;
    }
  });
  return result;
}

console.log(isBlockWord('BATCH'));      // true
console.log(isBlockWord('BUTCH'));      // false
console.log(isBlockWord('jest'));       // true