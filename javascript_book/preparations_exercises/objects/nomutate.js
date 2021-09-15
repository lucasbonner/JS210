let obj = {
  b: 2,
  a: 1,
  c: 3,
};

let arr = Object.keys(obj);
arr = arr.map(elem => elem.toUpperCase());

console.log(arr);