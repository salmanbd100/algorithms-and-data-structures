function checkIfPangram(sentence: string){
  const sentenceSet = new Set(sentence);
  return sentenceSet.size === 26;
}

console.log(checkIfPangram("thequickbrownfoxjumpsoverthelazydog"));
