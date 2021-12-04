/*
In the previous exercise, we developed a recursive solution for computing the nth Fibonacci number.
In a language that is not optimized for recursion, some (but not all) recursive functions can be
extremely slow and may require massive quantities of memory and/or stack space.
 If you tested for bigger nth numbers, you might have noticed that getting the 50th fibonacci number already takes a significant amount of time.

Fortunately, every recursive function can be rewritten as a non-recursive (or procedural)
function.

Rewrite your recursive fibonacci function so that it computes its results without using
recursion.

Examples:

fibonacci(20);       // 6765
fibonacci(50);       // 12586269025
fibonacci(75);       // 2111485077978050

Note that JavaScript can accurately compute integers up to 16 digits long;
this means that fibbonacci(78) is the largest Fibbonacci number that you can accurately compute with simple operations in JavaScript.
*/
function fibonacci(n) {
  let stop = 2;
  let fib = [1, 1];
  let result;
  do {
    result = fib[fib.length - 1] + fib[fib.length - 2];
    fib.push(result);
    stop++;
  } while (stop < n);
  if (n <= 3) {
    return fib[n - 1];
  } else {
    return fib[fib.length - 1];
  }
}

console.log(fibonacci(1));       // 1
console.log(fibonacci(2));       // 1
console.log(fibonacci(3));       // 2
console.log(fibonacci(4));       // 3
console.log(fibonacci(5));       // 5
console.log(fibonacci(20));       // 6765
console.log(fibonacci(50));       // 12586269025
console.log(fibonacci(75));       // 2111485077978050