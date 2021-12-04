/*
write a function that takes a string as an argument
and returns that string with every lowercase letter
changed to uppercase and every uppercase letter
changed to lowercase. Leave all other characters unchanged.
*/
function swapCase(str) {
  let result = '';

  str.split('').forEach(elem => {
    if (elem.match(/[a-z]/)) {
      result += elem.toUpperCase();
    } else if (elem.match(/[A-Z]/)) {
      result += elem.toLowerCase();
    } else {
      result += elem;
    }
  });
  console.log(result);
}


swapCase('CamelCase');              // "cAMELcASE"
swapCase('Tonight on XYZ-TV');      // "tONIGHT ON xyz-tv"