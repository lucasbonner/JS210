/*
Change your output to include the value from the getMonth method.
Thus, the logged string will read "Today's date is Mon, 11 6th", where 11 is the month number returned by getMonth.
*/
let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

let today =  new Date();
let date = today.getDate();
let day = today.getDay();
let month = today.getMonth();


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

console.log("Today's date is " + daysOfWeek[today.getDay()] + " " + month + " " + dateSuffix(today.getDate()));