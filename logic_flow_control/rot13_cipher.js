// Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:

// For each character in the original String:

//     If the character is a letter in the modern English alphabet, change it to the character 13 positions later
//     in the alphabet. Thus, a becomes n. If you reach the end of the alphabet, return to the beginning.
//     Thus, o becomes b.
//     Letter transformations preserve case. A becomes N while a becomes n.
//     Don't modify characters that are not letters.

// Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.

const LOWALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const BIGALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function rot13(str) {
  let result = "";
  let current_index = 0

  for (i = 0; i < str.length; i++) {
    let big = false;
    let low = false;

    if (LOWALPHABET.includes(str[i])) {
      current_index = LOWALPHABET.indexOf(str[i]);
      low = true;
    } else if (BIGALPHABET.includes(str[i])) {
      current_index = BIGALPHABET.indexOf(str[i]);
      big = true;
    }


    if ((current_index + 13) >= 26) {
      current_index = ((current_index + 13) - 26)
    } else {
      current_index = (current_index + 13)
    }

    if (big) {
      result += BIGALPHABET[current_index];
      big = false;
    } else if (low) {
      result += LOWALPHABET[current_index];
      low = false;
    } else {
      result += str[i];
    }

    current_index = 0;
  }
  return result;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.