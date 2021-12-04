/*
A triangle is classified as follows:

    Equilateral: All three sides are of equal length.
    Isosceles: Two sides are of equal length, while the third is different.
    Scalene: All three sides are of different lengths.

To be a valid triangle, the sum of the lengths of
 the two shortest sides must be greater
than the length of the longest side, and every
 side must have a length greater than 0.
 If either of these conditions is not satisfied, the triangle is invalid.

Write a function that takes the lengths of the
 three sides of a triangle as arguments
 and returns one of the following four strings
  representing the triangle's classification:
  'equilateral', 'isosceles', 'scalene', or 'invalid'.
*/
/*
-----------------------INSTRUCTIONS--------------------------------------
write a function that takes the lengths of the
three sides of a triangle as arguments
and returns one of the following four strings
  'equilateral', 'isosceles', 'scalene', 'invalid'

--------------------------PROBLEM----------------------------------------

Questions:

Input: three integers

Output: string ('equilateral', 'isosceles', 'scalene', 'invalid')

---------------------------RULES-----------------------------------------
Explicit:
To be a valid triangle, the sum of the lengths of
 the two shortest sides must be greater
than the length of the longest side, and every
 side must have a length greater than 0.
 If either of these conditions is not satisfied, the triangle is invalid.

 Equilateral: All three sides are of equal length.
    Isosceles: Two sides are of equal length, while the third is different.
    Scalene: All three sides are of different lengths.

Implicit:

--------------------------EXAMPLES---------------------------------------
(3, 3, 3)
this is equilateral because each integer is equal to each other

(3, 3, 1.5)
isosceles because two sides are equal, while third is different

(3, 4, 5)
scalene because each a different length

(0, 3, 3)
no side can be 0! invalid triangle

(3, 1, 1)
1 is less than 3(longest side) and 1 + 1 < 3

----------------------------ALGO----------------------------------------
conditional checks first for invalid, then rest shouldn't be bad:
  can put all three sides in an array, and if any? are 0, return "invalid"
for last, sort the array, and add first two and check against last
  if this sum is less than the last, return "invalid"

equilateral
  all elements must be equal
iterate thru all elements, save to a variable
if don't equal variable return false
  otherwise at end return true

how make unique method?


*/
function invalidTriangle(sidesArr) {
  if (sidesArr.some((elem) => {
    return elem === 0;
  })) {return true}

  let sum = 0;

  sidesArr.sort();
  for (let i = 0; i <= 1; i++) {
    sum += sidesArr[i];
  }
  if (sum < sidesArr[sidesArr.length - 1]) {
    return true;
  }
  return false;
}

function equilateral(sidesArr) {
  let iterator = sidesArr[0];
  let state = true;
  sidesArr.forEach((elem) => {
    if (iterator !== elem) {
      state = false;
    }
  });
  return state;
}

function unique(arr) {
  let result = [];
  arr.forEach((elem) => {
    if (!result.includes(elem)) {
      result.push(elem);
    }
  });
  return result;
}

function triangle(side1, side2, side3) {
  let sidesArr = [side1, side2, side3];
  if (invalidTriangle(sidesArr)) {
    return 'invalid';
  }
  if (equilateral(sidesArr)) {
    return 'equilateral';
  }
  if (unique(sidesArr).length === 2) {
    return 'isosceles';
  }
  if (unique(sidesArr).length) {
    return 'scalene';
  }
}


console.log(triangle(3, 3, 3));        // "equilateral"
console.log(triangle(3, 3, 1.5));      // "isosceles"
console.log(triangle(3, 4, 5));        // "scalene"
console.log(triangle(0, 3, 3));        // "invalid"
console.log(triangle(3, 1, 1));        // "invalid"