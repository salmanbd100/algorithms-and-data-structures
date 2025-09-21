var findMaxAverage = function (nums, k) {
  let windowSum = 0;
  let maxSum = 0;
  for (let i = 0; i < k; i++) {
    windowSum += nums[i];
  }
  maxSum = windowSum;
  for (let i = k; i < nums.length; i++) {
    windowSum = windowSum - nums[i - k] + nums[i];
    maxSum = Math.max(maxSum, windowSum);
  }
  return maxSum / k;
};

console.log(findMaxAverage([1, 12, -5, -6, 50, 3], 4));
