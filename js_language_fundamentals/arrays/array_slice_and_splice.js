/*
In this exercise, you will implement your own versions of the Array.prototype.slice and Array.prototype.splice methods
according to the following specifications.

The slice function takes three arguments: an array, and two integers representing a begin and an end index.
The function returns a new array containing the extracted elements starting from begin up to but not including end. slice does not mutate the original array.

The splice function changes the contents of an array by deleting existing elements and/or adding new elements. The
function takes the following arguments: an array, a start index, a deleteCount, and zero or more elements to be added. The
 function removes deleteCount number of elements from the array, beginning at the start index. If any optional element arguments
 are provided, splice inserts them into the array beginning at the start index. The function returns a new array containing the
 deleted elements, or an empty array ([]) if no elements are deleted. splice mutates the original array.
*/


function slice(array, begin, end) {
  if (begin > array.length) {
    begin = array.length;
  } else if (end > array.length) {
    end = array.length;
  }


  let result = [];
  for (let i = begin; i < end; i++) {
    result.push(array[i])
  }
  return result;
}

console.log(slice([1, 2, 3], 1, 2));               // [2]
console.log(slice([1, 2, 3], 2, 0));               // []
console.log(slice([1, 2, 3], 5, 1));               // []
console.log(slice([1, 2, 3], 0, 5));               // [1, 2, 3]

const arr1 = [1, 2, 3];
console.log(slice(arr1, 1, 3));                     // [2, 3]
console.log(arr1);                                  // [1, 2, 3]

/*
PEDAC:
input -> array, startindex, amount_elements_delete, *insertelements
output -> array of deleted elements

at starting index, delete amount specified by delete count
and then insert elements if any specified
*/

//ls solutions
function splice(array, start, deleteCount, ...args) {
  start = start > array.length ? array.length : start;
  deleteCount = deleteCount > (array.length - start) ? array.length - start : deleteCount;

  const arrayCopy = slice(array, 0, array.length);
  const elementCount = args.length;
  const newLength = array.length + elementCount - deleteCount;
  array.length = newLength;

  for (let i = 0; i < elementCount; i += 1) {
    array[start + i] = args[i];
  }

  let copyBackCount = arrayCopy.length - (start + deleteCount);
  for (let i = 0; i < copyBackCount; i += 1) {
    array[start + elementCount + i] = arrayCopy[start + deleteCount + i];
  }

  return slice(arrayCopy, start, start + deleteCount);
}

console.log(splice([1, 2, 3], 1, 2));              // [2, 3]
console.log(splice([1, 2, 3], 1, 3));              // [2, 3]
console.log(splice([1, 2, 3], 1, 0));              // []
console.log(splice([1, 2, 3], 0, 1));              // [1]
console.log(splice([1, 2, 3], 1, 0, 'a'));         // []

const arr2 = [1, 2, 3];
console.log(splice(arr2, 1, 1, 'two'));             // [2]
console.log(arr2);                                  // [1, "two", 3]

const arr3 = [1, 2, 3];
console.log(splice(arr3, 1, 2, 'two', 'three'));    // [2, 3]
console.log(arr3);                                  // [1, "two", "three"]

const arr4 = [1, 2, 3];
splice(arr4, 1, 0);                    // []
splice(arr4, 1, 0, 'a');               // []
console.log(arr4);                                  // [1, "a", 2, 3]

const arr5 = [1, 2, 3];
splice(arr5, 0, 0, 'a');               // []
console.log(arr5);                                  // ["a", 1, 2, 3]