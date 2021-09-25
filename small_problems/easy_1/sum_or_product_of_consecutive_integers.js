// Write a program that asks the user to enter an integer greater than 0,
// then asks if the user wants to determine the sum or the product of all numbers between 1 and the entered
// integer, inclusive.

//ex
// Please enter an integer greater than 0: 5
// Enter "s" to compute the sum, or "p" to compute the product. s

// The sum of the integers between 1 and 5 is 15.

// Please enter an integer greater than 0: 6
// Enter "s" to compute the sum, or "p" to compute the product. p

// The product of the integers between 1 and 6 is 720.

const readline = require('readline-sync')

function sumOrProduct() {
  let integer = parseInt(readline.question('Please enter an integer greater than 0: \n'));
  let decision = readline.question('Enter "s" to compute the sum, or "p" to compute the product. \n')

  let result = 0
  let form = ""
  if (decision == "s") {
    for (let i = 0; i <= integer; i++) {
      result += i
    }
    form = "sum"
  } else {
    if (result == 0) {
      result += 1
    }

    for (let i = 1; i <= integer; i++) {
      result *= i
    }
    form = "product"
  }


  console.log(`The ${form} of the integers between 1 and ${integer} is ${result}`)
}

sumOrProduct()