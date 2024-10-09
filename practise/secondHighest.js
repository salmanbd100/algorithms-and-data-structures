function secondHighest(str) {
  const digits = new Set();
  for (key of str) {
    if (!isNaN(key) && key !== " ") {
      digits.add(key);
    }
  }
  console.log();

  const sortedDigits = [...digits].sort((a, b) => b - a);
  console.log(sortedDigits);
  return sortedDigits.length >= 2 ? sortedDigits[1] : -1;
}

console.log(secondHighest("dfa12afd"));
