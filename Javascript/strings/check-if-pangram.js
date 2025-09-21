function checkIfPangram(sentence) {
  // Create a Set to store unique characters from the sentence
  const uniqueChars = new Set(sentence);

  // Check if the size of the Set is 26 (number of letters in the alphabet)
  return uniqueChars.size === 26;
}

// Example usage
const sentence = "thequickbrownfoxjumpsoverthelazydog";
console.log(checkIfPangram(sentence)); // Output: true
