var reverseWords = function (s) {
  const splitS = s
    .split(" ")
    .filter((data) => data !== "")
    .reverse()
    .join(" ");
  console.log(splitS);
};

console.log(reverseWords("  hello world  "));
