// Count the occurrences of each element in an array:

// Create a function in JavaScript that takes an array as input and returns an object representing the count of
// each unique element in the array.
// The function should count the occurrences of each unique element in the array.
// The function should handle arrays with any type of elements (e.g., numbers, strings).
// The function should return an empty object if the input array is empty.

const countOccurrences = (arr) => {
  if (arr.length === 0) {
    return {};
  }
  let resultObjMap = new Map();

  for (let i = 0; i < arr.length; i++) {
    const arrItem = arr[i];
    if (resultObjMap.has(arrItem)) {
      resultObjMap.set(arrItem, resultObjMap.get(arrItem) + 1);
    } else {
      resultObjMap.set(arrItem, 1);
    }
  }

  let resultObj = {};
  for (let [key, value] of resultObjMap) {
    resultObj[key] = resultObjMap[value];
  }

  return resultObjMap;
};

// Example of usage:
console.log(countOccurrences([1, 2, 2, 3, 3, 3])); // Output: {1: 1, 2: 2, 3: 3}
console.log(countOccurrences(["a", "b", "a", "c", "b", "b"])); // Output: {a: 2, b: 3, c: 1}
console.log(countOccurrences([])); // Output: {}
console.log(countOccurrences([true, false, true, true])); // Output: {true: 3, false: 1}
console.log(countOccurrences([1, "1", 2, "2", 2])); // Output: {1: 1, '1': 1, 2: 2, '2': 1}
