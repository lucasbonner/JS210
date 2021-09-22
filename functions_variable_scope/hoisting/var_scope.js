function foo() {
  if (false) {
    var a = 1; //code never runs;however still instantiates 'a' to 1
  }

  console.log(a);
}

foo();