var fizzBuzz = function (n) {
  let arr = [];
  for (let i = 1; i <= n; i++) {
    let arrItem = "";
    if (i % 3 === 0) arrItem += "Fizz";
    if (i % 5 === 0) arrItem += "Buzz";

    if (arrItem === "") arrItem += i;

    arr.push(arrItem);
  }
  return arr;
};

console.log(fizzBuzz(15));
