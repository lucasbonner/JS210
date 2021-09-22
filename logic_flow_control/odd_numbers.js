// Write a function that takes a positive integer as an argument, and logs all the odd numbers from 1 to the passed in number
// (inclusive). All numbers should be logged on separate lines.

function logOddNumbers(int) {
  let iterator = 0

  do {
    iterator++
    if (!(iterator % 2 == 0)) {
      console.log(iterator);
    };
  } while (iterator <= int);
}


logOddNumbers(19);

// output on console
// 1
// 3
// 5
// 7
// 9
// 11
// 13
// 15
// 17
// 19