let myNumbers = [1, 4, 3, 7, 2, 6];

function doubleNumbers(numbers) {
  let doubledNum = [];
  let counter = 0;

  while (counter < numbers.length) {
    let newNumb = numbers[counter];
    doubledNum.push(newNumb * 2);
    counter += 1;
  }
  return doubledNum;
}

console.log(doubleNumbers(myNumbers));
console.log(myNumbers);
