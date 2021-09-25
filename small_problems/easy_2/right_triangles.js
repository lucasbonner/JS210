function triangle(int) {
  let arr = []

  for (let i = 0; i < int; i++) {
    arr.push(' ')
  }
  arr.push('*')
  console.log(arr.join(''))

  for (let i = int - 1; i > 0; i--) {
    arr[i] = '*'
    console.log(arr.join(''))
  }
}


triangle(5);

//     *
//    **
//   ***
//  ****
// *****

triangle(9);

//         *
//        **
//       ***
//      ****
//     *****
//    ******
//   *******
//  ********
// *********

triangle(99);