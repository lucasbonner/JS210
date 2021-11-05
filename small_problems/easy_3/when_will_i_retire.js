/*
Build a program that logs when the user will retire and how many more years the user has to work until retirement.
*/
const readline = require('readline-sync');
const date = new Date();

function retire() {
  let age = readline.question("What is your age?");
  let retireAge = readline.question("At what age would you like to retire?");
  let year = date.getFullYear();

  console.log(`It's ${year}. You will retire in ${year + (retireAge - age)}`);
  console.log(`You have only ${retireAge - age} to go.`);
}

retire();

// What is your age? 30
// At what age would you like to retire? 70

// It's 2017. You will retire in 2057.
// You have only 40 years of work to go!