// Build a program that asks the user to enter the length and width of a room in meters, and
// then logs the area of the room to the console in both square meters and square feet.

// Note: 1 square meter == 10.7639 square feet

// Do not worry about validating the input at this time. Use the readlineSync.prompt method to collect user input.

const readline = require('readline-sync')

function getArea() {
  length = readline.question("Enter the length of the room in meters:\n");
  width = readline.question("Enter the width of the room in meters:\n");
  let area = (length * width)
  console.log(`The area of the room is ${area} square meters (${area * 10.7639} square feet).`)
}

getArea()

//ex
// Enter the length of the room in meters:
// 10
// Enter the width of the room in meters:
// 7
// The area of the room is 70.00 square meters (753.47 square feet).