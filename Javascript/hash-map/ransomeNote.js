function canConstruct(ransomNote, magazine) {
  const hashMap = {};
  for (let word of magazine) {
    hashMap[word] = (hashMap[word] || 0) + 1;
  }
  for (let word of ransomNote) {
    if (!hashMap[word]) return false;
    else hashMap[word]--;
  }

  return true;
}

console.log(canConstruct("ab", "aafb"));