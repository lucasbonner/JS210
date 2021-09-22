//What will the following code log to the console and why? Don't run the code until after you have tried to answer.

let a = 7;

function myValue(a) {
  a += 10;
}

myValue(a);
console.log(a); //7
//variable shadowing
//reassignment of local variable `a` within the function
//has no effect on global variable `a`