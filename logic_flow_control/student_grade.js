function imGradingYou() {
  let grade1 = Number(prompt('Enter score 1:'))
  let grade2 = Number(prompt('Enter score 2:'))
  let grade3 = Number(prompt('Enter score 3:'))

  let total = (grade1 + grade2 + grade3)
  let average = total/3

  let grade;
  if (average >= 90) {
    grade = 'A';
  } else if (average >= 70 && average < 90) {
    grade = 'B';
  } else if (average >= 50 && average < 70) {
    grade = 'C';
  } else {
    grade = 'F';
  }

  console.log(`Based on the average of your 3 scores your letter grade is "${grade}"`)
}

imGradingYou()


// // prompts to get the 3 scores
// Enter score 1: 90
// Enter score 2: 50
// Enter score 3: 78

// // log to the console
// Based on the average of your 3 scores your letter grade is "B".
