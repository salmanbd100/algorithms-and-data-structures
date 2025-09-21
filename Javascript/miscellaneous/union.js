// Create a function in JavaScript that takes two arrays as input and returns a new array containing the union of the two arrays, with all duplicate values removed.
// The function should merge the two input arrays.
// The function should remove any duplicate values from the merged array.
// The function should maintain the order of elements based on their first appearance.
const union = (arr1, arr2) => {
  const mergedTwoArray = [...arr1, ...arr2];
  const removeDuplicate = new Set(mergedTwoArray);
  return Array.from(removeDuplicate);
};
console.log(union([1, 2, 3], [3, 4, 5])); // [1, 2, 3, 4, 5]
