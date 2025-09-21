function vowelStrings(words: string[], left: number, right: number){
  // set data with vowel (a,e,i,o,u) using new Set Method
  // set count with 0
  // Loop Start from left to right
  // IF every loop item string[0] && string[string.length -1] is vowel then increase count

  const vowelSet = new Set(["a", "e", "i", "o", "u"]);
  let count = 0;
  for (let i = left; i <= right; i++) {
    const word = words[i].toLowerCase();
    if (vowelSet.has(word[0]) && vowelSet.has(word[word.length - 1])) {
      count += 1;
    }
  }

  return count;
}
