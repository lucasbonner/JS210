/*
Write a function that takes a string and returns an object containing the following three properties:

    the percentage of characters in the string that are lowercase letters
    the percentage of characters that are uppercase letters
    the percentage of characters that are neither

You may assume that the string will always contain at least one character.
*/
/*
-----------------------INSTRUCTIONS--------------------------------------
get percentage of total string made up by:
  lowercase letters
  uppercase letters
  neither
str.length always >= 1
--------------------------PROBLEM----------------------------------------

Questions:

Input: str of atleast one character

Output: object -> {percentage of lowercase, uppercase, neither}

---------------------------RULES-----------------------------------------
Explicit:

Implicit:

--------------------------EXAMPLES---------------------------------------
letterPercentages('abCdef 123');
  -> { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }
'abCdef 123'.length -> 10
lowercase -> [abdef] -> length of 5
10/5 -> 5
(10 * 10) -> 100
(5 * 10) -> 50
100/50 -> 50.00

5/10 -> .5

uppercase -> [C] -> length of 1
10/1 -> 10
10 * 10 -> 100
1 * 10 -> 10
100/10 -> 10

1/10 -> .1

neither -> [123 ] -> length of 4 (including space)
10/4 ->

(letterPercentages('AbCd +Ef')
'AbCd +Ef'.length -> 8
lowercase -> [bdf] -> 3
3/8 -> .375

uppercase -> [ACE] -> 3
3/8 -> .375

neither -> [ +] -> 2
2/8 -> .25

(all * 100).toFixed(2)


----------------------------ALGO----------------------------------------
have const collection of:
  lowercase characters
  uppercase characters
    neither can be calculated as not in lowercase or uppercase
need total length of string
need collection object, result, already set up with lowercase, uppercase, neither
  use reduce, collect arrays of lowercase, uppercase neither
divide them by total length, multiply that by 10, toFixed in result object

*/

function letterPercentages(str) {
  let result = {lowercase: "", uppercase: "", neither: ""};
  let totalLength = str.length;
  let lowercase = str.split('').filter(elem => {
    return elem.match(/[a-z]/);
  });
  let uppercase = str.split('').filter(elem => {
    return elem.match(/[A-Z]/);
  });
  let neither = str.split('').filter(elem => {
    return elem.match(/[^a-z]/i);
  });
  let iterator = [(lowercase.length / totalLength), (uppercase.length / totalLength), (neither.length / totalLength)];
  let counter = 0;
  for (let prop in result) {
    result[prop] = (iterator[counter] * 100).toFixed(2);
    counter++;
  }
  return result;
}

console.log(letterPercentages('abCdef 123'));
// { lowercase: "50.00", uppercase: "10.00", neither: "40.00" }

console.log(letterPercentages('AbCd +Ef'));
// { lowercase: "37.50", uppercase: "37.50", neither: "25.00" }

console.log(letterPercentages('123'));
// { lowercase: "0.00", uppercase: "0.00", neither: "100.00" }