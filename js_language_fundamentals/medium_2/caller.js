/*
The doubler function in the code below takes two arguments: a number to double and return,
and a string containing the name of the function's caller.
*/
function makeDoubler(caller) {
  return number => {
    console.log(`This function was called by ${caller}.`);
    return number + number;
  }
}
const doubler = makeDoubler('Victor');
console.log(doubler(5));                             // returns 10
// logs:
// This function was called by Victor.