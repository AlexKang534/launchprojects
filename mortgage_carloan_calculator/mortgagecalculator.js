const readline = require("readline-sync");

function prompt(message) {
  console.log(`=> ${message}`);
}

function isInvalidNumber(number) {
  return (
    number.trim() === "" || Number(number) < 0 || Number.isNaN(Number(number))
  );
}

prompt("Welcome to this mortgage calculator");

while (true) {
  prompt("What is the loan amount?");
  let loanAmount = readline.question();
  while (isInvalidNumber(loanAmount)) {
    prompt("Must enter a positive number");
    loanAmount = readline.question();
  }

  prompt("What is the APR?");
  prompt("(For example: 5 for 5% or 2.5 for 2.5%)");
  let loanAPR = readline.question();
  while (isInvalidNumber(loanAPR)) {
    prompt("Must enter a positive number");
    loanAPR = readline.question();
  }

  prompt("What is the loan duration in years?");
  let loanDuration = readline.question();
  while (isInvalidNumber(loanDuration)) {
    prompt("Must enter a positive number");
    loanDuration = readline.question();
  }

  let annualInterest = Number(loanAPR) / 100;
  let monthlyInterest = annualInterest / 12;
  let months = Number(loanDuration) * 12;

  let monthlyPayment =
    Number(loanAmount) *
    (monthlyInterest / (1 - Math.pow(1 + monthlyInterest, -Number(months))));

  prompt(`Your monthly payment is: $${monthlyPayment.toFixed(2)}`);

  prompt("Do you have another calculation?");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt('Please enter "y" or "n".');
    answer = readline.question().toLowerCase();
  }
  if (answer[0] === "n") break;
}
