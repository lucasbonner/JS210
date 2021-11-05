/*
Write a program that solicits six numbers from the
user and logs a message that describes whether the sixth number appears
among the first five numbers.
*/
const readline = require("readline-sync");

function numberIn() {
  let result = [];
  let counter = 0;

  let number;
  do {
    number = readline.question("Enter another number:");
    result.push(number);
    counter += 1;
  } while (counter < 5);

  number = readline.question("Enter the number to search for:");

  if (result.includes(number)) {
    return `The number ${number} appears in ${result}`;
  }

  return `The number ${number} does not appear in ${result}`;
}

console.log(numberIn());


// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 17

// The number 17 appears in [25, 15, 20, 17, 23].

// -----

// Enter the 1st number: 25
// Enter the 2nd number: 15
// Enter the 3rd number: 20
// Enter the 4th number: 17
// Enter the 5th number: 23
// Enter the last number: 18

// The number 18 does not appear in [25, 15, 20, 17, 23].