function removeElement(nums: number[], val: number): number {
  let counter = 0;
  nums.forEach((ele, index) => {
    if (ele !== val) {
      nums[counter] = ele;
      counter++;
    }
  });

  return counter;
}

console.log(removeElement([3, 2, 2, 3], 3));
