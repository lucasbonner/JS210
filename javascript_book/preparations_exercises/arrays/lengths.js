let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(array) {
  let result = [];
  result = array.map(function(elem) {
    return elem.length;
  });

  return result.filter(function(int) {
    return !(int % 2 === 0);
  });
}