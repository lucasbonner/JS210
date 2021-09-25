function logInBox(str) {
  let top = "+";
  let middle = "|";
  for (let i = 0; i <= str.length + 1; i++) {
    top += "-";
    middle += " ";
  }

  console.log(top + "+");
  console.log(middle + "|");
  console.log("| " + str + " |");
  console.log(middle + "|");
  console.log(top + "+");
}


logInBox('To boldly go where no one has gone before.');

// +--------------------------------------------+
// |                                            |
// | To boldly go where no one has gone before. |
// |                                            |
// +--------------------------------------------+

logInBox('');
// +--+
// |  |
// |  |
// |  |
// +--+