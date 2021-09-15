function multiply(a, b) {
  return a * b;
}

function getNumber(prompt) {
  let rlSync = require('readline-sync');
  return parseFloat(rlSync.question(prompt));
}

let firstNumber = getNumber("Enter the first number: ")
let secondNumber = getNumber("Enter the second number: ")
console.log(`${firstNumber} * ${secondNumber} = ${multiply(firstNumber, secondNumber)}`)