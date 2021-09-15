numberRange(25);
numberRange(75);
numberRange(125);
numberRange(-25);

function numberRange(integer) {
  if (integer >= 0 && integer <= 50) {
    console.log(`${integer} is between 0 and 50`)
  } else if (integer >= 51 && integer <= 100) {
    console.log(`${integer} is between 51 and 100`)
  } else if (integer > 100) {
    console.log(`${integer} is greater than 100`)
  } else if (integer < 0) {
    console.log(`${integer} is less than 0`)
  }
}