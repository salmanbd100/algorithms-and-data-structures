var lengthOfLastWord = function (s) {
  const splitS = s.split(" ").filter((data) => data !== "");
  return splitS[splitS.length - 1].length;
};

console.log(lengthOfLastWord("   fly me   to   the moon  "));
