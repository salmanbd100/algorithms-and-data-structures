function removeDuplicates(nums: number[]){
  let j = 0;
  for (let i = 1; i < nums.length; i++) {
    if (nums[i] !== nums[j]) {
      j++;
      nums[j] = nums[i];
    }
  }
  return j + 1;
}

console.log(removeDuplicates([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));

function removeDuplicates2(nums: number[]){
  let j = 2;
  for (let i = 2; i < nums.length; i++) {
    if (nums[i] !== nums[j - 2]) {
      nums[j] = nums[i];
      j++;
      console.log(nums);
    }
  }
  console.log(nums);
  return j;
}

console.log(removeDuplicates2([0, 0, 1, 1, 1, 2, 2, 3, 3, 4]));
