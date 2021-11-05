/*
Ideally, the suffix on the day number needs to adjust to the proper suffix for days like
the 1st, 22nd, and 3rd. Write a function named dateSuffix that takes the day of month as a numeric value and
returns the formatted day of month and suffix. Make sure you use the correct suffixes.
*/
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let today =  new Date();
let date = today.getDate();
let day = today.getDay();


function dateSuffix(date) {
  let dateString = String(date);

  let digit;
  if (dateString.length === 1 ) {
    digit = dateString[0];
  } else if (dateString[0] !== '1') {
    digit = dateString[1];
  }

  let suffix = 'th';
  if (digit === '1') {
    suffix = 'st';
  } else if (digit === '2') {
    suffix = 'nd';
  } else if (digit === '3') {
    suffix = 'rd';
  }

  return String(date) + suffix;
}

console.log("Today's date is " + daysOfWeek[today.getDay()] + ', the ' + dateSuffix(today.getDate()));