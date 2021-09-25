const ALPHABET = 'abcdefghijklmnpqrstuvwxyz'.split('')

function cleanUp(str) {
  let result = ""
  for (let i = 0; i <= str.length - 1; i++) {
    if (ALPHABET.includes(str[i])) {
      result += str[i];
      continue;
    } else if (str[i] == " ") {
      result += str[i];
      continue;
    }

    result += ' '
  }

  return result;
}

console.log(cleanUp("---what's my +*& line?"));    // " what s my line "

//I like these arrow functions
//LS SOLUTION:
// function cleanUp(text) {
//   let cleanText = '';

//   for (let i = 0; i < text.length; i += 1) {
//     if (isLowerCaseLetter(text[i]) || isUpperCaseLetter(text[i])) {
//       cleanText += text[i];
//     } else if (cleanText[cleanText.length - 1] !== ' ') {
//       cleanText += ' ';
//     }
//   }

//   return cleanText;
// }

// const isLowerCaseLetter = (char) => char >= 'a' && char <= 'z';

// const isUpperCaseLetter = (char) => char >= 'A' && char <= 'Z';