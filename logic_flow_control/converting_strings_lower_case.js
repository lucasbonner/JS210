const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

function toLowerCase(string) {
  let result = ""
  let iterative = ""

  for (i = 0; i <= string.length - 1; i++) {
   if (!(ALPHABET.includes(string[i]))) {
      iterative = string[i]
      iterative = iterative.charCodeAt(0);
      iterative += 32;
      result += String.fromCharCode(iterative);
      iterative = ""
    } else {
      result += string[i]
    }
  }

  return result;
}

console.log(toLowerCase('ALPHABET'));    // "alphabet"
// toLowerCase('123');         // "123"
console.log(toLowerCase('abcDEF'));      // "abcdef"