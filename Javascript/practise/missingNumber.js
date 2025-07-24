function missingNumber(nums) {
  let actualSum = 0;
  for (let i = 0; i <= nums.length; i++) {
    actualSum += i;
  }
  let expectedSum = 0;

  for (let num of nums) {
    expectedSum += num;
  }
  return actualSum - expectedSum;
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
