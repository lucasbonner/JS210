function gcd(int1, int2) {
  let stop;

  if (int1 > int2) {
    stop = int1;
  } else {
    stop = int2;
  }

  let divisor = 1
  let result;
  do {
    if ((int1 % divisor) == 0 && (int2 % divisor) == 0) {
      result = divisor
    }

    divisor++
  } while (divisor <= stop);

  return result;
}



console.log(gcd(12, 4));   // 4
console.log(gcd(15, 10));  // 5
console.log(gcd(9, 2));    // 1