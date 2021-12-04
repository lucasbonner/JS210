/*
Write a function that takes a string as an argument and returns that
string with the first character of every word capitalized
and all subsequent characters in lowercase.

You may assume that a word is any sequence of non-whitespace characters.
*/
function wordCap(str) {
  let result = [];
  let iterator = "";

  str.split(' ').forEach((elem) => {
    if (elem[0].match(/[a-z]/i)) {
      iterator += elem[0].toUpperCase();
    } else {
      iterator += elem[0];
    }
    iterator += elem.slice(1, elem.length);
    result.push(iterator);
    iterator = '';
  });
  return result.join(' ');
}

console.log(wordCap('four score and seven'));       // "Four Score And Seven"
console.log(wordCap('the javaScript language'));    // "The Javascript Language"
console.log(wordCap('this is a "quoted" word'));    // 'This Is A "quoted" Word'
