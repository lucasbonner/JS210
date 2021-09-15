let apples = 3;
let bananas = "3";

if (apples === bananas) {
  console.log('That be STRICT true');
} else {
  if (apples == bananas){
    console.log('same value, different types')
  } else {
  console.log('not strictly equal');
  };
};