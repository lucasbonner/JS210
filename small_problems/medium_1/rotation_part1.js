/*
Write a function that rotates an
array by moving the first element
to the end of the array. Do not modify the original array.

    If the input is not an array, return undefined.
    If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.
*/
/*
-----------------------INSTRUCTIONS--------------------------------------
Write a function that rotates an
array by moving the first element
to the end of the array. Do not modify the original array.

    If the input is not an array, return undefined.
    If the input is an empty array, return an empty array.

Review the test cases below, then implement the solution accordingly.
--------------------------PROBLEM----------------------------------------

Questions:

Input:array

Output:array(rotated)

---------------------------RULES-----------------------------------------
Explicit:
do not modify original array
if input is empty, return empty
if not an array, return undefined

Implicit:

--------------------------EXAMPLES---------------------------------------
rotateArray([7, 3, 5, 2, 9, 1]);       // [3, 5, 2, 9, 1, 7]s
first index -> 7
last index ->1

in return :
first index -> 3
last index -> 7


rotateArray(['a', 'b', 'c']);          // ["b", "c", "a"]
first element 'a' added to end

rotateArray(['a']);                    // ["a"]
one element, so orignal array returned

rotateArray([1, 'a', 3, 'c']);         // ["a", 3, "c", 1]
1 is moved from the beginning to the end

rotateArray([{ a: 2 }, [1, 2], 3]);    // [[1, 2], 3, { a: 2 }]
object {a: 2} moved to end

rotateArray([]);                       // []
empty return empty


----------------------------ALGO----------------------------------------
first, check if array
  if not return undefined
also check length,
  if length is 0 return empty array
otherwise, create a collection array(result)
  save firstelement as variable
starting from index 1 (not first element) add all elements to result
  then add firsteelement variable
return result

*/

function rotateArray(arr) {
  if (!Array.isArray(arr)) {
    return undefined;
  } else if (arr.length === 0) {
    return [];
  }
  let firstElement = arr[0];
  let result = [];

  for (let i = 1; i < arr.length; i++) {
    result.push(arr[i]);
  }
  result.push(firstElement);
  return result;
}

console.log(rotateArray([7, 3, 5, 2, 9, 1]));       // [3, 5, 2, 9, 1, 7]
console.log(rotateArray(['a', 'b', 'c']));          // ["b", "c", "a"]
console.log(rotateArray(['a']));                    // ["a"]
console.log(rotateArray([1, 'a', 3, 'c']));         // ["a", 3, "c", 1]
console.log(rotateArray([{ a: 2 }, [1, 2], 3]));    // [[1, 2], 3, { a: 2 }]
console.log(rotateArray([]));                       // []

// return `undefined` if the argument is not an array
console.log(rotateArray());                         // undefined
console.log(rotateArray(1));                        // undefined


// the input array is not mutated
const array = [1, 2, 3, 4];
console.log(rotateArray(array));                    // [2, 3, 4, 1]
console.log(array);                                 // [1, 2, 3, 4]
