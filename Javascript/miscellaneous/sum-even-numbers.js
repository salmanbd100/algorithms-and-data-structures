// Calculate the sum of all even numbers in an array:

// Create a function in JavaScript that takes an array of numbers as input and returns the sum of all even numbers in the array.
// The function should filter out all odd numbers from the input array.
// The function should sum up all the even numbers remaining in the array.
// The function should handle cases where the input array is empty, returning 0.
// The function should handle cases where there are no even numbers in the array, returning 0.

// o(n) o(n)
const sumEvenNumbers = (arr: number[]) => {
  if (arr.length === 0) {
    return 0;
  }

  const evenNumberArr: number[] = arr.filter((item: number) => item % 2 === 0);

  if (evenNumberArr.length === 0) {
    return 0;
  }

  const sumOfEvenNumbers = evenNumberArr.reduce(
    (accumulator, currentValue) => accumulator + currentValue,
    0
  );

  return sumOfEvenNumbers;
};

// Example of usage:
console.log(sumEvenNumbers([1, 2, 3, 4, 5])); // Output: 6
console.log(sumEvenNumbers([2, 4, 6, 8])); // Output: 20
console.log(sumEvenNumbers([1, 3, 5, 7])); // Output: 0
console.log(sumEvenNumbers([])); // Output: 0
console.log(sumEvenNumbers([1, 2, 3, 4, 5, 6])); // Output: 12
