// Rot13 ("rotate by 13 places") is a letter-substitution cipher that translates a String into a new String:

// For each character in the original String:

//     If the character is a letter in the modern English alphabet, change it to the character 13 positions later
//     in the alphabet. Thus, a becomes n. If you reach the end of the alphabet, return to the beginning.
//     Thus, o becomes b.
//     Letter transformations preserve case. A becomes N while a becomes n.
//     Don't modify characters that are not letters.

// Write a Function, rot13, that takes a String and returns that String transformed by the rot13 cipher.

const LOW_ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');
const BIG_ALPHABET = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('');

function rot13(str) {
  let result = "";
  let currentIndex = 0

  for (let i = 0; i < str.length; i++) {
    let big = false;
    let low = false;

    if (LOW_ALPHABET.includes(str[i])) {
      currentIndex = LOW_ALPHABET.indexOf(str[i]);
      low = true;
    } else if (BIG_ALPHABET.includes(str[i])) {
      currentIndex = BIG_ALPHABET.indexOf(str[i]);
      big = true;
    }


    if ((currentIndex + 13) >= 26) {
      currentIndex = ((currentIndex + 13) - 26)
    } else {
      currentIndex = (currentIndex + 13)
    }

    if (big) {
      result += BIG_ALPHABET[currentIndex];
      big = false;
    } else if (low) {
      result += LOW_ALPHABET[currentIndex];
      low = false;
    } else {
      result += str[i];
    }

    currentIndex = 0;
  }
  return result;
}

console.log(rot13('Teachers open the door, but you must enter by yourself.'));

// logs:
// Grnpuref bcra gur qbbe, ohg lbh zhfg ragre ol lbhefrys.

console.log(rot13(rot13('Teachers open the door, but you must enter by yourself.')));

// logs:
// Teachers open the door, but you must enter by yourself.