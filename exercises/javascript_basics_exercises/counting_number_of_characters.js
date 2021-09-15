const readlineSync = require('readline-sync')

console.log('Please enter a phrase:')
let phrase = String(readlineSync.prompt())
console.log(`There are ${phrase.length} characters in "${phrase}"`)



// Please enter a phrase: walk
// // console output
// There are 4 characters in "walk".

// Please enter a phrase: walk, don't run
// // console output
// There are 15 characters in "walk, don't run".
