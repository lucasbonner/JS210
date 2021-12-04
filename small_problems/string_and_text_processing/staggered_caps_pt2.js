/*
Modify the function from the previous exercise so that it
ignores non-alphabetic characters when determining whether a letter
should be upper or lower case. Non-alphabetic characters
should still be included in
the output string,
but should not be counted when determining the appropriate case.
*/

function staggeredCase(str) {
  let result = '';
  let even = 0;

  for (let i = 0; i < str.length; i++) {
    if (str[i].match(/[a-z]/i)) {
      even += 1;
    }

    if (even % 2 === 0) {
      result += str[i].toLowerCase();
    } else if (even % 2 !== 0) {
      result += str[i].toUpperCase();
    } else {
      result += str[i];
    }
  }
  console.log(result);
}

staggeredCase('I Love Launch School!');        // "I lOvE lAuNcH sChOoL!"
staggeredCase('ALL CAPS');                     // "AlL cApS"
staggeredCase('ignore 77 the 444 numbers');    // "IgNoRe 77 ThE 444 nUmBeRs"