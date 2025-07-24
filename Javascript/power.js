// Create a function in JavaScript that calculates the power of a given base raised to a given exponent.

// The function should calculate the power of a base raised to an exponent.
// The function should handle both positive and negative exponents.
// The function should handle a base of zero with any exponent.
// The function should handle an exponent of zero for any base.

const power = (base, exponent) => {
  // let result = base;
  // for (let i = 1; i < Math.abs(exponent); i++) {
  //   result = result * base;
  // }

  // if (exponent === 0) {
  //   return 1;
  // }

  // if (exponent < 0) {
  //   return 1 / result;
  // }

  // return result;

  return Math.pow(base, exponent);
};

// Example of usage:
console.log(power(2, 3)); // Output: 8
console.log(power(5, 2)); // Output: 25
console.log(power(10, 0)); // Output: 1
console.log(power(2, -2)); // Output: 0.25
console.log(power(0, 5)); // Output: 0
console.log(power(0, 0)); // Output: 1 (by convention, 0^0 is considered 1)
