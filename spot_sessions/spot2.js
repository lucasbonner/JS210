let name = "nina";
// i don't care about this...cuz I already found 'name'

function outer() {
  let name = "jill"; // shadowing the outer name
  // found it!

  function inner() {
    return name[0].toUpperCase() + name.slice(1);
    // is there a 'name' here?  no.
  }

  return inner();
}

console.log(outer());
//console.log(name);

/*


*/