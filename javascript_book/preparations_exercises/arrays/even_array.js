let myArray = [1, 3, 6, 11, 4, 2,
  4, 9, 17, 16, 0];

function arrayEven(arr) {
  for (let i = 0; i < arr.length; i += 1) {
    value = arr[i]
    if (value % 2 === 0) {
      console.log(value)
    }
  }
}

console.log(arrayEven(myArray))