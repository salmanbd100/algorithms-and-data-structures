/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function (s) {
  let windowSet = new Set();
  let left = 0;
  let right = 0;
  let maxLength = 0;
  while (right < s.length) {
    if (windowSet.has(s[right])) {
      windowSet.delete(s[left]);
      left++;
    } else {
      windowSet.add(s[right]);
      right++;
      maxLength = Math.max(maxLength, windowSet.size);
    }
  }
  return maxLength;
};

console.log(lengthOfLongestSubstring("abcabcbb"));
