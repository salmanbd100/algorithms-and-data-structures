// Merging Arrays with Unique Key Combinations

// Create a function in JavaScript that merges two arrays of objects based on a unique combination of two keys. If an object with the same combination of keys exists in both arrays, their properties should be combined, but only the non-overlapping properties should be kept.
// The function should merge objects from arr1 and arr2 based on the combination of key1 and key2.
// If an object with the same combination of keys exists in both arrays, only non-overlapping properties should be kept.
// If a combination of keys is present in only one array, the object should be included as is.
// The function should handle cases where either array is empty.

const mergeArraysWithUniqueKeys = (arr1, arr2, key1, key2) => {
  if (arr1.length === 0 || arr2.length === 0) {
    return null;
  }

  const mapArr = {};

  arr1.forEach((element) => {
    const key = element[key1].toString() + element[key2].toString();
    mapArr[key] = element;
  });

  const map2Arr = {};

  arr2.forEach((element) => {
    const key = element[key1].toString() + element[key2].toString();
    map2Arr[key] = element;
  });

  const reslutArr = [];

  for (let key in mapArr) {
    const mergedObj = { ...mapArr[key], ...map2Arr[key] };
    reslutArr.push(mergedObj);
  }

  return reslutArr;
};

console.log(
  mergeArraysWithUniqueKeys(
    [{ id: 1, type: "A", name: "John" }],
    [{ id: 1, type: "A", age: 30 }],
    "id",
    "type"
  )
);
// Output: [{ id: 1, type: "A", name: "John", age: 30 }]

console.log(
  mergeArraysWithUniqueKeys(
    [
      { id: 1, type: "A", name: "John" },
      { id: 2, type: "B", name: "Jane" },
    ],
    [
      { id: 1, type: "A", age: 30 },
      { id: 2, type: "B", gender: "female" },
    ],
    "id",
    "type"
  )
);
// Output: [{ id: 1, type: "A", name: "John", age: 30 }, { id: 2, type: "B", name: "Jane", gender: "female" }]
