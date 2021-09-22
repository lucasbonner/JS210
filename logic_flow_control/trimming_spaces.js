const ALPHABET = 'abcdefghijklmnopqrstuvwxyz'.split('');

function trim(str) {
  let start_index = 0
  let end_index = 0
  let result = ""

  for (i = 0; i <= str.length - 1; i++) {
    if (str[i] != " "){
      start_index = i;
      break;
    }
  }

  for (i = str.length - 1; i >= 0; i--) {
    if (str[i] != " "){
      end_index = i;
      break;
    }
  }

  for (i = start_index; i <= end_index; i++) {
    result += str[i]
  }

  if (str === "") {
    return ""
  }

  return result
  // return str.slice(start_index, end_index + 1) can't use built in string methods :(
}



console.log(trim('  abc  '));  // "abc"
console.log(trim('abc   '));   // "abc"
console.log(trim(' ab c'));    // "ab c"
console.log(trim(' a b  c'));  // "a b  c"
console.log(trim('      '));   // ""
console.log(trim(''));         // ""