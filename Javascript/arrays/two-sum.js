var twoSum = function (nums, target) {
  let obj = {};

  for (let i = 0; i < nums.length; i++) {
    const complement = target - nums[i];

    if (complement in obj) {
      return [obj[complement], i];
    }

    obj[nums[i]] = i;
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
