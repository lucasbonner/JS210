/*
Identify the bug in the following code. Don't run the code until after you've tried to answer.
*/

const myObject = {
  a: 'name',
  'b': 'test',
  123: 'c',
  1: 'd',
};

console.log(myObject[1]); //'d'
console.log(myObject['a']); //'name'
console.log(myObject.a); //'name'

/*
When using bracket notation, operand must be a string
*/