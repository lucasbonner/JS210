function foo() {
  if (true) {
    var a = 1;
    let b = 2;
  }

  console.log(a); //1
  console.log(b); //ReferenceError: a is not defined
}

foo();