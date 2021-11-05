/*
Read through the code below. What values will be logged to the console? Can you explain these results?
*/
const languages = ['JavaScript', 'Ruby', 'Python'];
console.log(languages); //whole array
console.log(languages.length); //3

languages.length = 4;
console.log(languages); //empty space at end
console.log(languages.length); //4

languages.length = 1;
console.log(languages); //just javascript
console.log(languages.length); //1

languages.length = 3;
console.log(languages);//javascript and empty spaces
console.log(languages.length); //3

languages.length = 1;
languages[2] = 'Python';
console.log(languages); //javascript, empty, python
console.log(languages[1]); //undefined
console.log(languages.length); //3