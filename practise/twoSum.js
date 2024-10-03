var twoSum = function (numbers, target) {
  let index1 = 0;
  let index2 = numbers.length - 1;
  while (index1 < index2) {
    const sum = numbers[index1] + numbers[index2];
    if (numbers[index1] + numbers[index2] === target) {
      return [index1 + 1, index2 + 1];
    }
    if (sum < target) {
      index1++;
    } else {
      index2--;
    }
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
