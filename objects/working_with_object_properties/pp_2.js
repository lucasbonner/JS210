/*
Write a function named incrementProperty that takes two arguments:
an Object and a String. If the Object contains a property with the
specified name,
the function should increment the value of that property. If the
property does not
exist, the function should add a new property with a value of 1.
The function should
 return the new value of the property.
*/

function incrementProperty(object, key) {
  if (!object[key]) {
    object[key] = 1;
    return object[key];
  }

  object[key] += 1;
  return object[key];
}

let wins = {
  steve: 3,
  susie: 4,
};

console.log(incrementProperty(wins, 'susie'));   // 5
console.log(wins);                               // { steve: 3, susie: 5 }
console.log(incrementProperty(wins, 'lucy'));    // 1
console.log(wins);                               // { steve: 3, susie: 5, lucy: 1 }