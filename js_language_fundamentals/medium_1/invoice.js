/*
The invoiceTotal function in the code below computes the total amount
for an invoice containing four "line items". How can you refactor the function so that it will work with
invoices containing any number of line items?
*/

function invoiceTotal(...args) {
  let total = 0;

  for (let i = 0; i < args.length; i++) {
    total += args[i];
  }

  return total;
}

console.log(invoiceTotal(20, 30, 40, 50));          // works as expected
console.log(invoiceTotal(20, 30, 40, 50, 40, 40));  // does not work; how can you make it work?
