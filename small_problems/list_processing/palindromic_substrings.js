/*
Write a function that returns a list of all substrings
of a string that are palindromic. That is, each substring
 must consist of the same sequence of characters forwards
  as backwards. The substrings in the returned list
   should be sorted by their order of appearance
    in the input string. Duplicate substrings should be included multiple times.

You may (and should) use the substrings function
you wrote in the previous exercise.

For the purpose of this exercise, you should consider
all characters and pay attention to case; that is,
 'AbcbA' is a palindrome, but 'Abcba' and 'Abc-bA'
  are not. In addition, assume that single characters are not palindromes.
*/
function leadingSubstrings(str) {
  let strArr = str.split('');
  let iterator = '';
  let result = [];

  for (let i = 0; i < strArr.length; i++) {
    iterator += strArr[i];
    result.push(iterator);
  }
  return result;
}

function substrings(str) {
  let result = [];
  let strArr = str.split('');

  do {
    leadingSubstrings(str).forEach((elem) => {
      result.push(elem);
    });
    strArr.shift();
    str = strArr.join('');
  } while (strArr.length > 0);
  return result;
}

function palindrome(str) {
  if (str.length === 1) {
    return false;
  }

  let comparisonStr = '';
  let strArr = str.split('');
  for (let i = strArr.length - 1; i >= 0; i--) {
    comparisonStr += strArr[i];
  }
  return (comparisonStr.toLowerCase() === str.toLowerCase());
}

function palindromes(str) {
  console.log(substrings(str).filter(palindrome));
}

palindromes('abcd');       // []
palindromes('madam');      // [ "madam", "ada" ]

palindromes('hello-madam-did-madam-goodbye');
// returns
// [ "ll", "-madam-", "-madam-did-madam-", "madam", "madam-did-madam", "ada",
//   "adam-did-mada", "dam-did-mad", "am-did-ma", "m-did-m", "-did-", "did",
//   "-madam-", "madam", "ada", "oo" ]

palindromes('knitting cassettes');
// returns
// [ "nittin", "itti", "tt", "ss", "settes", "ette", "tt" ]