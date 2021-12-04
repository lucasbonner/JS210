/*
Write a function that takes a sentence string as an argument and returns
that string with every occurrence of a "number word" — 'zero', 'one',
'two', 'three', 'four', 'five', 'six', 'seven', 'eight',
'nine' — converted to its corresponding digit character.
*/
/*
--------------------------PROBLEM----------------------------------------

Questions:

Input: string

Output: string (written integers replaced with string digit, i.e. 'five' -> '5')

---------------------------RULES-----------------------------------------
Explicit: every occurence of 'number word' replaced with string digit

Implicit:

--------------------------EXAMPLES---------------------------------------
'Please call me at five five five one two three four. Thanks.'
['Please', 'call', 'me', 'at', 'five', 'five', 'one', 'two', 'three', 'four', 'thanks]
'Please call me at 5 5 5 1 2 3 4. Thanks'


----------------------------ALGO----------------------------------------
have collection array, result
split input string by spaces
  have object with number words as keys, string digits as values
    if object is present pass changed value to result
return result joined
*/
function isNumberWord(numberWord) {
  let numberWords = {one: "1", two: "2", three: "3", four: "4", five: "5", six: "6", seven: "7", eight: "8", nine: "9"};

  if (numberWords[numberWord]) {
    return numberWords[numberWord];
  }
  return numberWord;
}

function wordToDigit(str) {
  return str.split(' ').map(isNumberWord).join(' ');
}

console.log(wordToDigit('Please call me at five five five one two three four. Thanks.'));
// "Please call me at 5 5 5 1 2 3 4. Thanks."