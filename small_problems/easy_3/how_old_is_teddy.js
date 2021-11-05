/*
Build a program that randomly generates Teddy's age, and logs it to the console.
Have the age be a random number between 20 and 200 (inclusive).
*/
function teddysAge() {
  let age = Math.floor(Math.random() * (200 - 20) + 20);
  return `Teddy is ${age} years old!`;
}

console.log(teddysAge())


// Teddy is 69 years old!