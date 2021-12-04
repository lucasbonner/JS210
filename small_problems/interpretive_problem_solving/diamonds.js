/*
Write a function that displays a four-pointed diamond in an
nxn grid, where n is an odd integer supplied as an argument
to the function. You may assume that the argument
will always be an odd integer.
*/
/*


-----------------------INSTRUCTIONS--------------------------------------
Given an integer, return a diamond
--------------------------PROBLEM----------------------------------------

Questions:

Input: odd integer

Output: output diamond

---------------------------RULES-----------------------------------------
Explicit: input integer will always be odd

Implicit:

--------------------------EXAMPLES---------------------------------------

diamond(1);

// *
integer is 1
output is a single asterick (equal to mosts middle line)
1 -> '*'



diamond(3);
integer is 3

surrounded by other lines size of 3
  but one asterick is space, asterick, space (space variable 1 asterick)
output in middle is same, integer * '*' -> *** (space variable is 0)
  space, asterick, space(space variable 1, asteric)


//  *
// ***
//  *

diamond(9);
// logs
space variable start as half (4), asterick(1), 4 spaces
(3) space variable, asterick (3), (3) space variable
(2) space variable, asterick (5), (2) space variable
middle line is 9 astericks
repeat in opposite order


//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *

----------------------------ALGO----------------------------------------
*/
function diamondUp(spaces, asterick, int) {
  let currentLine = '';
  let result = [];

  for (let i = 1; i <= Math.ceil(int/2); i++) {
    currentLine = spaces.join('') + asterick.join('') + spaces.join('');
    result.push(currentLine);
    asterick.push('**');
    spaces.pop();
  }
  return result;
}

function diamond(int) {
  let spaceVariable = Math.floor(int / 2);
  let asterick = ['*'];
  let spaces = [];
  let result = [];


  for (let i = 1; i <= spaceVariable; i++) {
    spaces.push(' ');
  }

  result = diamondUp(spaces, asterick, int);
  for (let i = 0; i < result.length; i++) {
    console.log(result[i]);
  }
  for (let i = result.length - 2; i >= 0; i--) {
    console.log(result[i]);
  }
}

diamond(1);
// logs
// *

diamond(3);
// logs
//  *
// ***
//  *

diamond(9);
// logs
//     *
//    ***
//   *****
//  *******
// *********
//  *******
//   *****
//    ***
//     *