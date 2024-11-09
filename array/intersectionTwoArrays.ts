function intersection(nums1: number[], nums2: number[]): number[] {
  // create unique item list for num1
  // create unique item list for num2
  // create empty result array
  // LOOP into the first unique Items and check under second item unique list it has exist or not
  // If it has exist then push into our result array
  const firstUniqueItems = new Set(nums1);
  const secondUniqueItems = new Set(nums2);
  const insertedArray: number[] = [];
  for (const item of firstUniqueItems) {
    if (secondUniqueItems.has(item)) {
      insertedArray.push(item);
    }
  }
  return insertedArray;
}

console.log(intersection([4, 9, 5], [9, 4, 9, 8, 4]));
