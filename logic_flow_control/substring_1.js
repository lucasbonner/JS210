function substr(string, start, length) {
  let result = ""
  let new_start = 0

  if (start < 0) {
    new_start = (string.length + start)
  } else if (length < 0) {
    return result;
  } else {
    new_start = start
  }

  if (new_start < 0) {
    return "";
  }

  for (i = new_start; i <= string.length; i++) {
    if (i > string.length - 1) {
      return result;
    } else if (result.length == length) {
      return result;
    }

    result += string[i]
  }
  return result;
}

let string = 'hello world';

console.log(substr(string, 2, 4));      // "llo "
console.log(substr(string, -3, 2));     // "rl"
console.log(substr(string, 8, 20));     // "rld"
console.log(substr(string, 0, -20));    // ""
console.log(substr(string, 0, 0));      // ""