let a = 'outer';

console.log(a); //'outer'
setScope(); //uncaught typeerror: setScope is not a function(..)
console.log(a);

var setScope = function () {
  a = 'inner';
};