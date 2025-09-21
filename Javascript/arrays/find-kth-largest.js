function findKthLargest(nums: number[], k: number){
  const sortedArr = nums.sort((a, b) => b - a);
  return sortedArr[k - 1];
}

console.log(findKthLargest([3, 2, 1, 5, 6, 4], 2));
