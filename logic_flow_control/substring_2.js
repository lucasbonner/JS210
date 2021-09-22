function substring(string, start, end) {
  if (typeof start !== 'number' ) {
    start = 0
  } else if (start > end) {
    let new_end = start;
    let new_start = end;
    end = new_end;
    start = new_start;
  }

  if ((end == undefined) || (end > string.length)) {
    end = (string.length)
  }

  if (start < 0) {
    start = 0;
  }

  let result = ""

  for (i = start; i < end; i++) {
    result += string[i]
  }

  return result;
}

let string = 'hello world';

console.log(substring(string, 2, 4));    // "ll"
console.log(substring(string, 4, 2));    // "ll"
console.log(substring(string, 0, -1));   // ""
console.log(substring(string, 2));       // "llo world"
console.log(substring(string, 'a'));     // "hello world"
console.log(substring(string, 8, 20));   // "rld"