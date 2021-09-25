// Create a simple tip calculator. The program should prompt for a bill amount and a tip rate.
// The program must compute the tip, and then log both the tip and the total amount of the bill to the console.
// You can ignore input validation and assume that the user will put in numbers.

const readline = require('readline-sync')

function getTip() {
  let bill = parseInt(readline.question("What is the bill?\n"));
  let tip = parseFloat('.' + readline.question("What is the tip percentage?\n"))

  console.log(`The tip is $${bill * tip}.00`)
  console.log(`The total is $${(bill) + (bill * tip)}.00`)
}

getTip()



// Ex
// What is the bill? 200
// What is the tip percentage? 15

// The tip is $30.00
// The total is $230.00