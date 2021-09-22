function generatePattern(int) {
  let str = ''

  for (i = 0; i < int; i++) {
    str += '*'
  }

  let numStr = ''
  let slicer = str.length
  for (i = 0; i < int; i++) {
    numStr += Number(i + 1)
    slicer -= 1
    console.log(numStr + (str.slice(0, slicer)))
  }

}



generatePattern(7);

// console output
// 1******
// 12*****
// 123****
// 1234***
// 12345**
// 123456*
// 1234567