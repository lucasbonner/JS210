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
/*
Our call to console.log is getting cluttered. Let's clean things up a bit and refactor the code into a few formatting
functions that we can call from anywhere in our code. Create formattedMonth and formattedDay functions to format the month and
day, then write a formattedDate function that pulls everything together and logs the fully formatted date.
*/

function formattedDate(date) {
  let day = formattedDay(date);
  let month = formattedMonth(date);

  console.log("Today's date is " + day + " " + month+ " " + dateSuffix(date.getDate()));
}

function formattedMonth(date) {
  let months = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  let month = date.getMonth();
  return months[month];
}

function formattedDay(date) {
  let daysOfWeek = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

  return daysOfWeek[date.getDay()];
}


let today =  new Date();
formattedDate(today);




// console.log("Today's date is " + daysOfWeek[today.getDay()] + " " + months[month] + " " + dateSuffix(today.getDate()));