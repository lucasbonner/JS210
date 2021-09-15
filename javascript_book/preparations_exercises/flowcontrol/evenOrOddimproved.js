function evenOrOdd (integer) {
  if (Number.isInteger(integer))
    {if (integer % 2 === 0) {
        console.log('even');
    } else {
        console.log('odd');
    }}
  else {
    console.log('Not an integer')
    return;
  }
}

evenOrOdd(4);
evenOrOdd(3);
evenOrOdd('3');