/*
The processOrder function shown below accepts the following arguments: price,
quantity, discount, serviceCharge and tax. Any arguments other than price may be omitted when calling the function,
in which case, default values will be assigned.
*/

function processOrder(price, quantity, discount, serviceCharge, tax) {
  if (!quantity) {
    quantity = 1;
  }

  if (!discount) {
    discount = 0;
  }

  if (!serviceCharge) {
    serviceCharge = 0.1;
  }

  if (!tax) {
    tax = 0.15;
  }

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

processOrder(100);      // 126.5

//------------------------------------------------------
function processOrder(price, quantity, discount, serviceCharge, tax) {
  quantity = quantity || 1;
  discount = discount || 0;
  serviceCharge = serviceCharge || 0.1;
  tax = tax || 0.15;

  return (price * quantity) * (1 - discount) * (1 + serviceCharge) * (1 + tax);
}

/*
However, both of these solutions have a limitation that can lead to an incorrect result for certain inputs.
What is this limitation and how does it affect the result?

*/

//just checks if it's a falsey value, 0 is falsey