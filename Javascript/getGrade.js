// Determine the grade based on a score:

// Create a function `getGrade` in JavaScript that takes a numeric score as input and returns the
// corresponding letter grade based on the given scale.
// The function should return:
// 'A' for scores 90 and above.
// 'B' for scores 80 to 89.
// 'C' for scores 70 to 79.
// 'D' for scores 60 to 69.
// 'F' for scores below 60.

const getGrade = (score) => {
  const EGrade = {
    A: "A",
    B: "B",
    C: "C",
    D: "D",
    F: "F",
  }
  if (score > 90) {
    return EGrade.A;
  } else if (score >= 80 && score <= 89) {
    return EGrade.B;
  } else if (score >= 70 && score <= 79) {
    return EGrade.C;
  } else if (score >= 60 && score <= 69) {
    return EGrade.D;
  } else {
    return EGrade.F;
  }
};

console.log(getGrade(95)); // Output: A
console.log(getGrade(85)); // Output: B
console.log(getGrade(75)); // Output: C
console.log(getGrade(65)); // Output: D
console.log(getGrade(55)); // Output: F
