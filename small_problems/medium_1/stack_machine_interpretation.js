/*
n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the
register value, storing the result in the register.

SUB : Pop a value from the stack and subtract it from
the register value, storing the result in the register.

MULT : Pop a value from the stack and multiply it
by the register value, storing the result in the register.

DIV : Pop a value from the stack and divide the
register value by the popped stack value,
storing the integer result back in the register.

REMAINDER : Pop a value from the stack and
divide the register value by the popped
stack value, storing the integer remainder of the division back in the register.

POP : Remove the topmost item from the stack and place it in the register.

PRINT : Print the register value.
*/
/*
-----------------------INSTRUCTIONS--------------------------------------
n : Place a value, n, in the register. Do not modify the stack.
PUSH : Push the register value onto the stack. Leave the value in the register.
ADD : Pop a value from the stack and add it to the
register value, storing the result in the register.

SUB : Pop a value from the stack and subtract it from
the register value, storing the result in the register.

MULT : Pop a value from the stack and multiply it
by the register value, storing the result in the register.

DIV : Pop a value from the stack and divide the
register value by the popped stack value,
storing the integer result back in the register.

REMAINDER : Pop a value from the stack and
divide the register value by the popped
stack value, storing the integer remainder of the division back in the register.

POP : Remove the topmost item from the stack and place it in the register.

PRINT : Print the register value.
--------------------------PROBLEM----------------------------------------

Questions:

Input: string of 'commands'

Output: appropriate integer output

---------------------------RULES-----------------------------------------
Explicit:

Implicit:

--------------------------EXAMPLES---------------------------------------
'PRINT');
// 0
nothing in register, default is 0
  print command prints the register
  that is 0 here

'5 PUSH 3 MULT PRINT';
MULT : Pop a value from the stack and multiply it
by the register value, storing the result in the register.

5 is first part of string
  register -> 5
hit 3
  5 goes to stack -> [5]
  register now 3
mult pops value from stack and multiply it by register
  register *= stack.pop()
  register -> 15
PRINT -> PRINT register value
  15 printed to console


console.log(minilang('5 PRINT PUSH 3 PRINT ADD PRINT'));
register is 5
  PRINT -> prints register (5)
PUSH puts value in stack, leaves in register
  stack -> [5]
  register -> 5
3, register now 3
PRINT -> prints 3
ADD
  register += stack.pop() (5)
  register = 8
PRINT-> 8

console.log(minilang('5 PUSH POP PRINT'));
// 5

console.log(minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT'));
// 5
// 10
// 4
// 7

console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// 6

console.log(minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT'));
// 12

console.log(minilang('-3 PUSH 5 SUB PRINT'));
// 8

console.log(minilang('6 PUSH'));


----------------------------ALGO----------------------------------------


*/
const COMMANDS = ['ADD', 'SUB', 'MULT', 'DIV', 'REMAINDER', 'POP', 'PRINT', 'PUSH'];

function isNumber(strNum) {
  return String(Number(strNum)) === strNum;
}

function push(register, stack) {
  stack.push(register);
  return stack;
}

function mult(register, stackPop) {
  return register * stackPop;
}

function div(register, stackPop) {
  return register / stackPop;
}

function add(register, stackPop) {
  return register + stackPop;
}

function remainder(register, stackPop) {
  return register % stackPop;
}

function sub(register, stackPop) {
  return register - stackPop;
}

function minilang(commands) {
  let stack = [];
  let register = 0;
  let arr = commands.split(' ');

  arr.forEach(elem => {
    if (isNumber(elem)) {
      register = Number(elem);
    } else {
      switch (elem) {
        case 'PUSH':
          stack = push(register, stack);
          break;
        case 'MULT':
          register = mult(register, stack.pop());
          break;
        case 'PRINT':
          console.log(register);
          break;
        case 'ADD':
          register = add(register, stack.pop());
          break;
        case 'POP':
          register = stack.pop();
          break;
        case 'DIV':
          register = div(register, stack.pop());
          break;
        case 'REMAINDER':
          register = remainder(register, stack.pop());
          break;
        case 'SUB':
          register = sub(register, stack.pop());
          break;
      }
    }
  });
}

minilang('PRINT');
// // 0

minilang('5 PUSH 3 MULT PRINT');
// // 15

minilang('5 PRINT PUSH 3 PRINT ADD PRINT');
// // // 5
// // // 3
// // // 8

minilang('5 PUSH POP PRINT');
// // 5

minilang('3 PUSH 4 PUSH 5 PUSH PRINT ADD PRINT POP PRINT ADD PRINT');
// // 5
// // 10
// // 4
// // 7

console.log(minilang('3 PUSH PUSH 7 DIV MULT PRINT'));
// // 6

minilang('4 PUSH PUSH 7 REMAINDER MULT PRINT');
// // 12

minilang('-3 PUSH 5 SUB PRINT');
// // 8

minilang('6 PUSH');
// (nothing is printed because the `program` argument has no `PRINT` commands)