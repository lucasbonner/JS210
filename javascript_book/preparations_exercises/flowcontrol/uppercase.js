function uppercase(string) {
  if (string.length > 10) {
    return string.toUpperCase();
  } else {
    return string;
  }
}

console.log(uppercase('hello world'));
console.log(uppercase('goodbye'));