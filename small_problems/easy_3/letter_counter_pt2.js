/*
Modify the wordSizes function from the previous exercise to exclude non-letters when determining word size.
For instance, the word size of "it's" is 3, not 4.
*/
const ALPH = 'abcdefghijklmnopqrstuvwxyz'.split('');

function wordSizes(str) {
  str = stripString(str);
  let object = {};
  let array = str.split(' ');

  if (str.length === 0) {
    return object;
  }

  for (let i = 0; i < array.length; i++) {
    if (Object.keys(object).includes(String(array[i].length))) {
      object[array[i].length] += 1;
    } else {
      object[array[i].length] = 1;
    }
  }
  return object;
}

function stripString(str) {
  let array = str.split(' ');
  let result = [];

  for (let i = 0; i < array.length; i++) {
    result.push(stripWord(array[i]));
  }
  return result.join(' ');
}

function stripWord(word) {
  let result = "";
  let wordLower = word.toLowerCase();

  for (let i = 0; i < word.length; i++) {
    if (ALPH.includes(wordLower[i])) {
      result += word[i];
    }
  }
  return result;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 2 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 3 }
console.log(wordSizes("What's up doc?"));                              // { "5": 1, "2": 1, "3": 1 }
console.log(wordSizes(''));                                            // {}
