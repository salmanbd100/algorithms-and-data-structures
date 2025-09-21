function chunkArray(arr, size) {
  console.log(arr);
  let chunkArr = [];
  for (let i = 0; i < arr.length; i += size) {
    chunkArr.push(arr.slice(i, i + size));
  }
  return chunkArr;
}

console.log(chunkArray([1, 2, 3, 4, 5, 6, 7], 2));
