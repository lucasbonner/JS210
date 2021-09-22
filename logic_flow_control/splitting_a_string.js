function splitString(string, delimiter) {
  if (delimiter === undefined) {
    console.log("ERROR: No delimiter")
    return;
  }

  if (delimiter == "") {
    for (i = 0; i <= string.length - 1; i++) {
      console.log(string[i])
    }
    return;
  }


  let output = ""
  for (i = 0; i <= string.length - 1; i++) {
    if (string[i] == delimiter) {
      console.log(output);
      output = ""
    } else if (output == delimiter) {
      output = "";
    }

    output += string[i]

  }

  if (output != delimiter) {
    console.log(output);
  }
}

splitString('abc,123,hello world', ',');
// logs:
// abc
// 123
// hello world

splitString('hello');
// // logs:
// // ERROR: No delimiter

splitString('hello', '');
// // logs:
// // h
// // e
// // l
// // l
// // o

splitString('hello', ';');
// // logs:
// // hello

splitString(';hello;', ';');
// logs:
//  (this is a blank line)
// hello