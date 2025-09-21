function subarraySum(nums: number[], k: number){
  let map = new Map<number, number>([[0, 1]]);
  let current: number = 0;
  let matches: number = 0;

  for (let i = 0; i < nums.length; i++) {
    current += nums[i];
    matches += map.get(current - k) ?? 0;

    map.set(current, (map.get(current) ?? 0) + 1);
  }
  console.log(map);

  return matches;
}

console.log(subarraySum([1, 2, 3], 3));
