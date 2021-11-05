/*
Write a function named objectHasProperty that takes two arguments:
an Object and a String. The function should return true if the Object contains a
property with the name given by the String, false otherwise.
*/

function objectHasProperty(object, string) {
  let keys = Object.keys(object);
  return keys.indexOf(string) !== -1;
}

let pets = {
  cat: 'Simon',
  dog: 'Dwarf',
  mice: null,
};

console.log(objectHasProperty(pets, 'dog'));       // true
console.log(objectHasProperty(pets, 'lizard'));    // false
console.log(objectHasProperty(pets, 'mice'));      // true