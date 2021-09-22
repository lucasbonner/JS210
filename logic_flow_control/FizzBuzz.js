// Write a function that iterates over the integers from 1 to 100, inclusive.
// For multiples of three, log "Fizz" to the console. For multiples of five, log "Buzz".
// For numbers which are multiples of both three and five, log "FizzBuzz". For all other numbers, log the number.

function fizzbuzz() {
  for (let i = 0; i <= 100; i++) {
    if ((i % 3 == 0) && (i % 5 == 0)) {
      console.log('FizzBuzz');
    } else if (i % 5 == 0) {
      console.log('Buzz');
    } else if (i % 3 == 0) {
      console.log('Fizz');
    } else {
      console.log(i)
    }
  }
}


// Your output should look like this:

fizzbuzz();

// console output
// 1
// 2
// Fizz
// 4
// Buzz
// Fizz
// 7
// 8
// Fizz
// Buzz
// 11
// Fizz
// 13
// 14
// FizzBuzz
// 16
// 17
// Fizz
// … rest of output omitted for brevity