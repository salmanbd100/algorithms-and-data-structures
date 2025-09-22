function reverseString(s){
  let left = 0;
  let right = s.length - 1;
  while (left < right) {
    const temp = s[left];
    s[left] = s[right];
    s[right] = temp;
    left++;
    right--;
  }
  console.log(s);
}

console.log(reverseString(["H", "a", "n", "n", "a", "h"]));
