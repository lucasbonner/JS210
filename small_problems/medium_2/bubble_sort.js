/*
Write a function that takes an array as an argument and sorts that array using
the bubble sort algorithm described above. The sorting should be done "in-place" —
that is, the function should mutate the array.
You may assume that the array contains at least two elements.
*/
function swapper(arr) {
  let firstElem = "";
  let secondElem = "";
  let iterator = 0;

  do {
    if (firstElem === "") {
      firstElem = arr[iterator];
      iterator++;
    }
    if (secondElem === "") {
      secondElem = arr[iterator];
    }
    if (firstElem !== "" && secondElem !== "") {
      if (firstElem > secondElem) {
        arr[iterator - 1] = secondElem;
        arr[iterator] = firstElem;
        secondElem = "";
        iterator++
      } else {
        firstElem = secondElem;
        secondElem = "";
        iterator++
      }
    }
   } while (iterator < arr.length);
   return arr;
}

function areEqual(arr1, arr2) {
  let state = true;
  arr1.forEach((elem, index) => {
    if (elem !== arr2[index]) {
      state = false;
    }
  });
  return state;
}

function bubbleSort(arr) {
  let notEqual = false;
  do {
    let previousArr = arr.slice(0, arr.length);
    arr = swapper(arr);
    notEqual = areEqual(previousArr, arr);
  } while (!notEqual);
  return arr;
}

const array1 = [5, 3];
bubbleSort(array1);
console.log(array1);    // [3, 5]

const array2 = [6, 2, 7, 1, 4];
bubbleSort(array2);
console.log(array2);    // [1, 2, 4, 6, 7]

const array3 = ['Sue', 'Pete', 'Alice', 'Tyler', 'Rachel', 'Kim', 'Bonnie'];
bubbleSort(array3);
console.log(array3);    // ["Alice", "Bonnie", "Kim", "Pete", "Rachel", "Sue", "Tyler"]