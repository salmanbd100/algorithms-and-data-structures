function rotLeft(a, d) {
  // d mod a.length ensures we handle cases where d >= a.length
  d = d % a.length;

  // Slice the array into two parts and concatenate them
  const rotatedArray = a.slice(d).concat(a.slice(0, d));
  return rotatedArray;
}

console.log(rotLeft([1, 2, 3, 4, 5], 8));
