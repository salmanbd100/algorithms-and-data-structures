// Find the maximum and minimum elements in an array:

// Create a function in JavaScript that calculates the difference between the maximum and minimum values in a given array of numbers.

// The function should find the maximum and minimum values in the array.
// It should return the difference between these two values.
// The function should handle cases where the array has only one element, returning 0 as the difference.
// If the array is empty, the function should return null or an appropriate message indicating that the array is empty.

const differenceOfMaxMin = (arr) => {
  if (arr.length === 0) {
    return "Array is empty";
  }

  if (arr.length < 2) {
    return 0;
  }

  const maxNumber = Math.max(...arr);
  const minNumber = Math.min(...arr);

  return maxNumber - minNumber;
};
console.log(differenceOfMaxMin([3, 5, 1, 9, 2]));
// Output: 8 (since 9 - 1 = 8)

console.log(differenceOfMaxMin([7]));
// Output: 0 (since the array has only one element)

console.log(differenceOfMaxMin([]));
// Output: null (or "Array is empty")
