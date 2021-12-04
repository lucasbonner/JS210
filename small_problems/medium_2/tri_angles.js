/*
A triangle is classified as follows:

    Right: One angle is a right angle (exactly 90 degrees).
    Acute: All three angles are less than 90 degrees.
    Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must
be exactly 180 degrees, and every angle must be
greater than 0. If either of these conditions is
not satisfied, the triangle is invalid.

Write a function that takes the three angles of
a triangle as arguments and returns one of the
following four strings representing the triangle's
 classification: 'right', 'acute', 'obtuse', or 'invalid'.

You may assume that all angles have integer values,
 so you do not have to worry about floating point
  errors. You may also assume that the arguments are in degrees.
*/
/*
-----------------------INSTRUCTIONS--------------------------------------
Write a function that takes the three angles of
a triangle as arguments and returns one of the
following four strings representing the triangle's
 classification: 'right', 'acute', 'obtuse', or 'invalid'.
--------------------------PROBLEM----------------------------------------

Questions:

Input: three integers

Output: string ('acute', 'right', 'obtuse', 'invalid)

---------------------------RULES-----------------------------------------
Explicit:
Right: One angle is a right angle (exactly 90 degrees).
Acute: All three angles are less than 90 degrees.
Obtuse: One angle is greater than 90 degrees.

To be a valid triangle, the sum of the angles must
be exactly 180 degrees, and every angle must be
greater than 0. If either of these conditions is
not satisfied, the triangle is invalid.

Implicit:

--------------------------EXAMPLES---------------------------------------
triangle(60, 70, 50)
  60 < 90
  70 <90
  50 <90
all three angles are less than 90 degrees, acute

triangle(30, 90, 60)
  30 <90
  90 <90 FALSE
not acute
but 90 === 90, meaning right

120, 50, 10)
120 > 90
one angle is greater than 90, return obtuse

0, 90, 90)
0, every angle must be greater than 0, therefore invalid


50, 50, 50
sum is 150, sum MUST be exactly 180
----------------------------ALGO----------------------------------------
first, check if triangle is valid,
  get sum, if it's not 180, return "invalid"
also if any equal 0, return "invalid"

*/

function notValid(arr) {
  let result = false;
  let sum = arr.reduce((sum, elem) => {
    if (elem === 0) {
      result = true;
    }
    sum += elem;
    return sum;
  }, 0);
  if (sum !== 180) {
    result = true;
  }
  return result;
}

function triangle(side1, side2, side3) {
  let sidesArr = [side1, side2, side3];
  if (notValid(sidesArr)) {
    return 'invalid';
  }

  if (sidesArr.every(elem => elem < 90)) {
    return 'acute';
  }

  if (sidesArr.some(elem => elem > 90)) {
    return 'obtuse';
  } else if (sidesArr.some(elem => elem === 90)) {
    return 'right';
  }
}

console.log(triangle(60, 70, 50));       // "acute"
console.log(triangle(30, 90, 60));       // "right"
console.log(triangle(120, 50, 10));      // "obtuse"
console.log(triangle(0, 90, 90));        // "invalid"
console.log(triangle(50, 50, 50));       // "invalid"