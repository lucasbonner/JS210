// Write a function that logs the integers from 1 to 100 (inclusive) that are multiples of either 3 or 5.
// If the number is divisible by both 3 and 5, append an "!" to the number.

function multiplesOfThreeAndFive() {
  let iterator = 0;

  do {
    iterator ++

    if ((iterator % 3 == 0) && (iterator % 5 == 0)) {
      console.log(String(iterator) + '!');
    } else if (iterator % 5 == 0) {
      console.log(String(iterator));
    } else if (iterator % 3 == 0) {
      console.log(String(iterator));
    }
  } while (iterator <= 100);
}


multiplesOfThreeAndFive();

// output on console
// '3'
// '5'
// '6'
// '9'
// '10'
// '12'
// '15!'
// … remainder of output omitted for brevity
