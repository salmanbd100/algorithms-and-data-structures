// Count the occurrences of each element in an array:

// Create a function in JavaScript that takes an array as input and returns an object representing the count of
// each unique element in the array.
// The function should count the occurrences of each unique element in the array.
// The function should handle arrays with any type of elements (e.g., numbers, strings).
// The function should return an empty object if the input array is empty.

const countOccurrences = (arr) => {
  let countObj = arr.reduce((count, item) => {
    count[item] = (count[item] || 0) + 1;
    return count;
  }, {});

  return countObj;
};

// Example of usage:
console.log(countOccurrences([1, 2, 2, 3, 3, 3])); // Output: {1: 1, 2: 2, 3: 3}
console.log(countOccurrences(["a", "b", "a", "c", "b", "b"])); // Output: {a: 2, b: 3, c: 1}
console.log(countOccurrences([])); // Output: {}
console.log(countOccurrences([true, false, true, true])); // Output: {true: 3, false: 1}
console.log(countOccurrences([1, "1", 2, "2", 2])); // Output: {1: 1, '1': 1, 2: 2, '2': 1}
