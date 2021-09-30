function concat(...args) {
  let result = [];
  for (let i = 0; i < args.length; i++) {
    result = runFunction(args[i], result)
  }

  return result;
}

function runFunction(arr, result) {
  if (Array.isArray(arr)) {
    result = addToArray(arr, result)
    return result;
  }
  result.push(arr);
  return result;
}

function addToArray(arr, result) {
  for (let i = 0; i < arr.length; i++) {
    result.push(arr[i]);
  }

  return result;
}


console.log(concat([1, 2, 3], [4, 5, 6], [7, 8, 9]));    // [1, 2, 3, 4, 5, 6, 7, 8, 9]
console.log(concat([1, 2], 'a', ['one', 'two']));        // [1, 2, "a", "one", "two"]
console.log(concat([1, 2], ['three'], 4));               // [1, 2, "three", 4]