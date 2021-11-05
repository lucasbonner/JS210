/*
Write a function named wordCount that takes a single String as an argument.
The function should return an Object that contains the counts of each word that appears in the provided String.
In the returned Object, you should use the words as keys, and the counts as values.
*/
function wordCount(str)  {
  let result = {};
  let arr = str.split(' ');

  for (let i = 0; i < arr.length; i++) {
    if (Object.keys(result).indexOf(arr[i]) !==  -1) {
      result[arr[i]] += 1;
    } else {
      result[arr[i]] = 1;
    }
  }

  return result;
}



console.log(wordCount('box car cat bag box'));  // { box: 2, car: 1, cat: 1, bag: 1 }