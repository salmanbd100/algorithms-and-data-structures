function chunk(arr: any[], size: number): any[] {
  // take a emty array resultArr
  // WHILE LOOP until main arr.length < 0
  // -- splice(0, size) and push it into resultArr
  const resultArr: any[] = [];
  while (arr.length > 0) {
    const chunk = arr.splice(0, size);
    resultArr.push(chunk);
  }
  return resultArr;
}

console.log(chunk([1, 2, 3, 4, 5], 1));
