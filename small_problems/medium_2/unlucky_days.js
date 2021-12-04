/*
Write a function that takes a year as an argument and
returns the number of 'Friday the 13ths' in that year.
You may assume that the year is greater than 1752
(when the modern Gregorian Calendar was adopted by the United Kingdom).
 You may also assume that the same
 calendar will remain in use for the foreseeable future.
*/
/*
-----------------------INSTRUCTIONS--------------------------------------
count the amount of fridays that fall on the 13th for each year
--------------------------PROBLEM----------------------------------------

Questions:

Input: integer(a year)

Output: the amount of times friday fell on the 13th for that given year

---------------------------RULES-----------------------------------------
Explicit:

Implicit:

--------------------------EXAMPLES---------------------------------------
somehow need to create the full year and then iterate thru it
  on each month returning the 'day' on the 13th
can create date on Jan. 13 (year)
  iterate thru each month to december
  where if the day returned is Friday, add to the count


----------------------------ALGO----------------------------------------

*/

function fridayThe13ths(year) {
  let startMonth = 1;
  let startDate = new Date(`${startMonth}/13/${year}`);
  let counter = 0;
  for (let i = startMonth + 1; i <= 12; i++) {
    if (startDate.getDay() === 5) {
      counter++;
    }
    startDate = new Date(`${i}/13/${year}`);
  }
  return counter;
}

console.log(fridayThe13ths(1986));      // 1
console.log(fridayThe13ths(2015));      // 3
console.log(fridayThe13ths(2017));      // 2