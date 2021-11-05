/*
Write a function that takes a string consisting of one or more
space separated words and returns an object that shows the number of words of different sizes.

Words consist of any sequence of non-space characters.
*/
function wordSizes(str) {
  let object = {};
  let array = str.split(' ');

  if (str.length === 0) {
    return object;
  }

  for (let i = 0; i < array.length; i++) {
    if (Object.keys(object).includes(String(array[i].length))) {
      object[String(array[i].length)] += 1;
    } else {
      object[array[i].length] = 1;
    }
  }
  return object;
}

console.log(wordSizes('Four score and seven.'));                       // { "3": 1, "4": 1, "5": 1, "6": 1 }
console.log(wordSizes('Hey diddle diddle, the cat and the fiddle!'));  // { "3": 5, "6": 1, "7": 2 }
console.log(wordSizes("What's up doc?"));                              // { "2": 1, "4": 1, "6": 1 }
console.log(wordSizes(''));                                            // {}