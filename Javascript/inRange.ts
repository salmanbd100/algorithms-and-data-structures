// Check if a number is within a specified range:

// Create a function in JavaScript that checks if a given number falls within a specified range (inclusive).
// The function should return true if num is greater than or equal to min and less than or equal to max.
// The function should return false otherwise.
// Handle cases where min is greater than max by considering min as the lower bound and max as the upper bound.

const inRange = (num, min, max) => {
  if (min > max) {
    return false;
  }

  if (num >= min && num <= max) {
    return true;
  } else {
    return false;
  }
};

// Example of usage:
console.log(inRange(5, 1, 10)); // Output: true
console.log(inRange(5, 6, 10)); // Output: false
console.log(inRange(5, 5, 5)); // Output: true
console.log(inRange(5, 0, 5)); // Output: true
console.log(inRange(5, 10, 1)); // Output: false (assuming the range is min <= max)
