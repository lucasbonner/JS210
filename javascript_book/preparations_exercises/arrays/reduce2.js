let arr = ['a', 'abcd', 'abcde', 'abc', 'ab'];
console.log(oddLengths(arr)); // => [1, 5, 3]

function oddLengths(arr) {
  return arr.reduce((accum, elem) => {
    let length = elem.length;
    if (length % 2 !== 0) {
      accum.push(length);
    };
    return accum;
  }, []);
};