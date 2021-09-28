// Write a function that takes an array, and returns a new array with duplicate elements removed.

//PEDAC

//data:
//input: array
//output: array(w/o duplicates)

//rules:
//order maintained

/*
Pseudo/Algo
create result array
iterate thru input array (using loop)
add to result array IF element not already present
return result
*/


function uniqueElements(arr) {
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (!(result.includes(arr[i]))) {
      result.push(arr[i])
    }
  }
  return result;
}

console.log(uniqueElements([1, 2, 4, 3, 4, 1, 5, 4]));  // returns [1, 2, 4, 3, 5]

//LS solution NO includes, they used indexOf, which returns -1 if element not present
//i.e. [1,2].indexOf(3) returns -1