// Write a function that takes a year as input and returns the century.
// The return value should be a string that begins with the century number, and ends with 'st', 'nd', 'rd', or 'th' as
// appropriate for that number.

// New centuries begin in years that end with 01. So, the years 1901 - 2000 comprise the 20th century.
//1-100 1st
//101-200 2nd
//201-300 3rd


function century(int) {
  let year = 1
  let century = 1
  do {
    if (String(year)[String(year).length - 1] == '1') {
      year += 99
    } else {
      year += 1
    }

    century += 1
  } while (int >= year)

  return String(parseInt(century/2)) + String(centurySuffix(parseInt(century)/2))
  // return parseInt(century/2);
}

function centurySuffix(centuryNumber) {
  if (catchWithTh(centuryNumber % 100)) {
    return 'th';
  }

  let lastDigit = centuryNumber % 10;
  switch (lastDigit) {
    case 1: return 'st';
    case 2: return 'nd';
    case 3: return 'rd';
    default: return 'th';
  }
}

function catchWithTh(lastTwo) {
  return lastTwo === 11 || lastTwo === 12 || lastTwo === 13;
}



console.log(century(2000));        // "20th"
console.log(century(2001));        // "21st"
console.log(century(1965));        // "20th"
console.log(century(256));         // "3rd"
console.log(century(5));           // "1st"
console.log(century(10103));       // "102nd"
console.log(century(1052));        // "11th"
console.log(century(1127));        // "12th"
console.log(century(11201));       // "113th"