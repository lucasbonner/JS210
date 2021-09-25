// Numerical score letter grade list:

//     90 <= score <= 100: 'A'
//     80 <= score < 90: 'B'
//     70 <= score < 80: 'C'
//     60 <= score < 70: 'D'
//     0 <= score < 60: 'F'


function getGrade(int1, int2, int3) {
  let score = ((int1 + int2 + int3)/3)

  if ((score >= 90) && (score <= 100)) {
    return 'A';
  } else if ((score >= 80) && (score <= 90)) {
    return 'B';
  } else if ((score >= 70) && (score <= 80)) {
    return 'C';
  } else if ((score >= 60) && (score <= 70)) {
    return 'D';
  } else {
    return 'F';
  }
}

console.log(getGrade(95, 90, 93));    // "A"
console.log(getGrade(50, 50, 95));    // "D"