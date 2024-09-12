// Objective:
// Create a function in JavaScript that calculates the n-th Fibonacci number using an iterative approach.
// The function should handle cases where n is 0 or 1 by returning n.
// The function should use an iterative approach to calculate the Fibonacci number.
// The function should handle larger values of n efficiently.

const fibonacci = (n) => {
  if (n === 0) {
    return 0;
  } else if (n === 1) {
    return 1;
  }

  let a = 0,
    b = 1;
  for (let i = 2; i <= n; i++) {
    let temp = a + b;
    a = b;
    b = temp;
  }
  return b;
};

// Example of usage:
console.log(fibonacci(5)); // Output: 5
console.log(fibonacci(0)); // Output: 0
console.log(fibonacci(1)); // Output: 1
console.log(fibonacci(10)); // Output: 55
console.log(fibonacci(20)); // Output: 6765
