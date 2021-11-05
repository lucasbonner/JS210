/*
Write a function that takes two arrays as arguments and returns an array containing
the union of the values from the two. There should be no duplication of values in the returned array,
even if there are duplicates in the original arrays. You may assume that both arguments will always
be arrays.
*/
function union(arr1, arr2) {
  let result = arr1;

  let counter = 0;
  do {
    if (!(result.includes(arr2[counter]))) {
      result.push(arr2[counter]);
      counter++;
    }
    counter++;
  } while (counter < arr2.length);
  return result;
}


console.log(union([1, 3, 5], [3, 6, 9]));    // [1, 3, 5, 6, 9]