// Create a function in JavaScript that takes a 32-bit signed integer as input and returns its digits reversed. If reversing the integer causes it to go outside the 32-bit signed integer range, the function should return 0.
// The function should handle both positive and negative integers.
// Ensure that any leading zeros in the reversed integer are removed (e.g., reversing 120 should result in 21).
// If the reversed integer exceeds the 32-bit signed integer range ([-2,147,483,648 to 2,147,483,647]), the function should return 0.

const reverseInteger = (num) => {};

console.log(reverseInteger(123));
// Output: 321

console.log(reverseInteger(-123));
// Output: -321

console.log(reverseInteger(120));
// Output: 21

console.log(reverseInteger(1534236469));
// Output: 0 (because reversing it would cause overflow)
