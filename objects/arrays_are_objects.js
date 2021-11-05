let a = ['hello', 'world'];

console.log(typeof a); //"object"
console.log(a['1']); //"world", object's bracket notation to access value
console.log(Object.keys(a)); //["0", "1"], the keys of the object!

//line 1 is equivalent of:

let a = {
  '0': 'hello',
  '1': 'world',
};

console.log(typeof a); //"object"
console.log(a['1']) // "world", object's bracket notation to access value
console.log(Object.keys(a)); //["0", "1"], the keys of the object