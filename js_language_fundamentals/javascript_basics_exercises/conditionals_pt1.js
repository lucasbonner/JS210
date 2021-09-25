const myBoolean = true;
const myString = 'hello';
const myArray = [];
const myOtherString = '';

if (myBoolean) {
  console.log('Hello'); //Should print 'Hello'
}

if (!myString) {
  console.log('World'); //'No print
}

if (!!myArray) {
  console.log('World'); //'World'
}

if (myOtherString || myArray) {
  console.log('!'); //'!'
}