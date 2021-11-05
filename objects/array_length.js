let myArray = [];
myArray['foo'] = 'bar';
myArray[0] = 'baz';
myArray[1] = 'qux';

console.log(myArray) //logs ['baz', 'qux', foo: 'bar]
myArray.length; //returns 2 since foo: 'bar' is not an element
myArray.indexOf('bar') //returns -1 since 'bar' isn't an element

myArray[-1] = 'hello';
myArray[-2] = 'world';
myArray.length; //returns 2
myArray.indexOf('hello') //returns -1 since 'hello' is not in an element
                         // the fact that myArray[-1] is 'hello' is coincidental
myArray.indexOf('world') //returns -1 since 'world is not in an element

console.log(myArray); //logs ['baz', 'qux', foo: 'bar', '-1': 'hello', '-2': 'world']
Object.keys(myArray).length; //returns 5 (there are 5 keys at this point)
myArray.length; //returns 2 (but only 2 keys are indexes)