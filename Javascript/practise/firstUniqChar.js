function firstUniqChar(s) {
  let obj = {};
  for (let char of s) {
    if (char in obj) {
      obj[char] += 1;
    } else {
      obj[char] = 1;
    }
  }

  for (let i = 0; i < s.length; i++) {
    if (obj[s[i]] === 1) {
      return i;
    }
  }

  return -1;
}

console.log(firstUniqChar("leetcode"));
