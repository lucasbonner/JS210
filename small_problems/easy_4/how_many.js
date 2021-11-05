/*
Write a function that counts the number of occurrences of each element in a given array.
Once counted, log each element alongside the number of occurrences.
*/

const vehicles = ['car', 'car', 'truck', 'car', 'SUV', 'truck',
                'motorcycle', 'motorcycle', 'car', 'truck'];

function countOccurrences(arr) {
  let result = {};

  for (let i = 0; i < arr.length; i++) {
    if (Object.keys(result).includes(arr[i])) {
      result[arr[i]] += 1;
    } else {
      result[arr[i]] = 1;
    }
  }
  for (k in result) {
    console.log(`${k} => ${result[k]}`);
  }
}


console.log(countOccurrences(vehicles));

// console output
// car => 4
// truck => 3
// SUV => 1
// motorcycle => 2
