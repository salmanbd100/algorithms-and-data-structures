var capitalizeTitle = function (title) {
  let arrOfString = title.split(" ");
  for (let i = 0; i < arrOfString.length; i++) {
    const word = arrOfString[i].toLowerCase();
    if (word.length > 2) {
      arrOfString[i] = word.charAt(0).toUpperCase() + word.slice(1);
    } else {
      arrOfString[i] = word;
    }
  }
  return arrOfString.join(" ");
};

console.log(capitalizeTitle("capiTalIze tHe titLe"));

arr = [0, 1, 2];
// arr[1]= 2;
console.log(arr[1]);
