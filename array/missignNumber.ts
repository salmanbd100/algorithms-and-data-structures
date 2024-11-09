function missingNumber(nums: number[]): number {
  // Takt two var expectedSum and currentSum
  //LOOP for expected sum before >= nums.length
  // LOOp for current sum before > nums.length
  // return expectedSum - currentSum
  let expectedSum = 0;
  let currentSum = 0;
  for (let i = 0; i <= nums.length; i++) {
    expectedSum += i;
  }

  for (const num of nums) {
    currentSum += num;
  }

  return expectedSum - currentSum;
}

console.log(missingNumber([9, 6, 4, 2, 3, 5, 7, 0, 1]));
