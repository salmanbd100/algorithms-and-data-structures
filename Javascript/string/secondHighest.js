function secondHighest2(s){
  const stringSet = new Set(s);
  const numberArr = [];
  for (const elm of stringSet) {
    if (elm !== " " && !isNaN(Number(elm))) {
      numberArr.push(Number(elm));
    }
  }
  if (numberArr.length < 2) return -1;
  return numberArr.sort((a, b) => b - a)[1];
}

console.log(secondHighest2("abc1111"));
