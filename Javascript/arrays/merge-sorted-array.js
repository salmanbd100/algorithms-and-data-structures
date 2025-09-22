/**
 Do not return anything, modify nums1 in-place instead.
 */
function mergeSortedArray(
  nums1,
  m,
  nums2,
  n
) {
  let i = m - 1;
  let j = n - 1;
  let k = m + n - 1;
  while (k >= 0) {
    const c1 = 0 <= i;
    if (nums1[i] < nums2[j] || !c1) {
      nums1[k] = nums2[j];
      j--;
    } else {
      nums1[k] = nums1[i];
      i--;
    }
    k--;
  }
  console.log(nums1);
}

console.log(mergeSortedArray([0], 0, [1], 1));
// console.log(mergeSortedArray([1, 2, 3, 0, 0, 0], 3, [2, 5, 6], 3));
