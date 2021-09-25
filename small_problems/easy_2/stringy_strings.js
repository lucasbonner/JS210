function stringy(int) {
  let result = "1";
  let i = 0;
  do {
    i++
    if (result[i - 1] == "1") {
      result += "0";
    } else {
      result += "1";
    }
  } while (i < int - 1);

  console.log(result);
}

stringy(6);    // "101010"
stringy(9);    // "101010101"
stringy(4);    // "1010"
stringy(7);    // "1010101"