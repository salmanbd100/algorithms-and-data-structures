var minSubArrayLen = function (target, nums) {
  let left = 0;
  let right = 0;
  let minLength = Infinity;
  let sum = 0;
  while (right < nums.length) {
    if (sum >= target) {
      minLength = Math.min(minLength, right - left + 1);
      sum -= nums[left];
      console.log(sum)
      
      left++;
      
    } else {
      sum += nums[right];
      right++;
    }
  }
  console.log(minLength);
};

console.log(minSubArrayLen(7, [2, 3, 1, 2, 4, 3]));
