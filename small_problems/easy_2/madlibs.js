const readline = require('readline-sync')

function madlib() {
  let noun = readline.question("Enter a noun:\n");
  let verb = readline.question("Enter a verb:\n");
  let adjective = readline.question("Enter a adjective:\n");
  let adverb = readline.question("Enter a adverb:\n");

  console.log(`Why does the ${adjective} ${noun} always ${adverb} ${verb}?`)
}

madlib()


// Enter a noun: dog
// Enter a verb: walk
// Enter an adjective: blue
// Enter an adverb: quickly

// // console output
// Do you walk your blue dog quickly? That's hilarious!