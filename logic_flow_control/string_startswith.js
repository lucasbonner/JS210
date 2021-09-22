function startsWith(string, searchString) {
  let result = ""

  for (i = 0; i <= string.length - 1; i++) {
    if (result == searchString) {
      return true;
    }

    result += string[i]
  }
  return false;
}

let str = 'We put comprehension and mastery above all else';
console.log(startsWith(str, 'We'));              // true
console.log(startsWith(str, 'We put'));          // true
console.log(startsWith(str, ''));                // true
console.log(startsWith(str, 'put'));             // false

let longerString = 'We put comprehension and mastery above all else!';
console.log(startsWith(str, longerString));      // false