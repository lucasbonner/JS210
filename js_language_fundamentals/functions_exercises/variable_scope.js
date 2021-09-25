//What will the following code log to the console and why? Don't run the code until after you have tried to answer.

function someFunction() {
  myVar = 'This is global'; //no var; JavaScript binds `myVar` to be "property" of global object
}

someFunction();
console.log(myVar); //'This is global'