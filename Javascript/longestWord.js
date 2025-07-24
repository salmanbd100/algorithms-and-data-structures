// Create a function in JavaScript that takes a string as input and returns the longest word in that string.
// The function should split the input string into words.
// The function should handle multiple spaces between words gracefully.
// The function should return the first occurrence of the longest word if there are multiple words of the same maximum length.
// The function should handle empty strings and return an empty string in such cases.

const longestWord = (str) => {
  if (!str) return "";
  const arrOfString = str.split(" ").filter((d) => d !== "");
  let result = "";
  for (let item of arrOfString) {
    console.log(item);
    if (item.length > result.length) {
      result = item;
    }
  }
  return result;
};

// Example of usage:
console.log(longestWord("The quick brown fox")); // Output: "quick"
console.log(longestWord("Jumped over the lazy dog")); // Output: "Jumped"
console.log(longestWord("hello world")); // Output: "hello"
console.log(longestWord("")); // Output: ""
