console.log(a); //ReferenceError

function hello() {
  a = 1;
}

//we define hello, but never call it, therefore never assigning a value to a