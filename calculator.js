// ask the user for 1st number
// ask the user for 2nd number
// ask the user for hte operation
//perform the task
//display the result

const readline = require("readline-sync");

console.log("WElcome to the calculator");

console.log("What is the first number?");
let number1 = readline.question();

console.log("WHat is the 2nd number?");
let number2 = readline.question();

console.log(
  "What operation do you want to use?\n1) Add 2) Subtract 3) Multiply 4) Divide"
);
let operation = readline.question();

if (operation === "1") {
  output = Number(number1) + Number(number2);
} else if (operation === "2") {
  output = Number(number1) - Number(number2);
} else if (operation === "3") {
  output = Number(number1) * Number(number2);
} else operation === "4";
{
  output = Number(number1) / Number(number2);
}
console.log(`The result is ${output}`);
