var topKFrequent = function (nums, k) {
  let obj = {};
  for (let num of nums) {
    if (num in obj) {
      obj[num] += 1;
    } else {
      obj[num] = 1;
    }
  }
  const resultKeySorted = Object.keys(obj)
    .sort((a, b) => obj[b] - obj[a])
    .slice(0, k);
  return resultKeySorted;
};

console.log(topKFrequent([1, 1, 1, 2, 2, 3], 2));
