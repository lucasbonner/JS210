

//loop that iterates upwards
function indexOf(firstString, secondString) {
  for (i = 0; i <= firstString.length; i ++)  {
    if (firstString[i] === secondString) {
      return i
    } else if (firstString.slice(i) === secondString) {
      return i
    }
  }
  return -1
}


//loop that counts backwards
function lastIndexOf(firstString, secondString) {
  for (i = firstString.length; i >= 0; i --)  {
    if (firstString[i] === secondString) {
      return i
    } else if (firstString.slice(i) === secondString) {
      return i
    }
  }
  return -1
}

console.log(indexOf('Some strings', 's'));                      // 5
console.log(indexOf('Blue Whale', 'Whale'));                    // 5
console.log(indexOf('Blue Whale', 'Blute'));                    // -1 (not present)
console.log(indexOf('Blue Whale', 'leB'));                      // -1 (not present)

console.log(lastIndexOf('Some strings', 's'));                  // 11
console.log(lastIndexOf('Blue Whale, Killer Whale', 'Whale'));  // 19
console.log(lastIndexOf('Blue Whale, Killer Whale', 'all'));    // -1