//Modules
const readline = require("readline-sync");
const MESSAGES = require("./calculator_messages.json");

//Message Functions
function prompt(message) {
  console.log(`=> ${message}`);
}

//Numbercheck Function
function invalidNumber(number) {
  return number.trimStart() === "" || Number.isNaN(Number(number));
}

runCalculator();
function runCalculator() {
  //Initial Prompt
  prompt(MESSAGES["welcome"]);

  //User Input 1st Number
  prompt(MESSAGES["question1"]);
  let number1 = readline.question();

  while (invalidNumber(number1)) {
    prompt(MESSAGES["badinput"]);
    number1 = readline.question();
  }

  //User Input 2nd Number
  prompt(MESSAGES["question2"]);
  let number2 = readline.question();

  while (invalidNumber(number2)) {
    prompt(MESSAGES["badinput"]);
    number2 = readline.question();
  }

  //User Chooses Operation
  prompt(MESSAGES["operations"]);
  let operation = readline.question();

  //"While" "not 1/2/3/4" "run prompt and reask question"
  while (!["1", "2", "3", "4"].includes(operation)) {
    prompt(MESSAGES["badinput"]);
    operation = readline.question();
  }

  //Calculator Logic
  let output;
  switch (operation) {
    case "1":
      output = Number(number1) + Number(number2);
      break;
    case "2":
      output = Number(number1) - Number(number2);
      break;
    case "3":
      output = Number(number1) * Number(number2);
      break;
    case "4":
      output = Number(number1) / Number(number2);
      break;
  }
  prompt(`The result is ${output}`);

  //Ask User to Choose another calculation
  prompt("Would you like to do another calculation? 1 For Yes, 2 For No");
  let restart = readline.question();
  while (!["1", "2"].includes(restart)) {
    prompt(MESSAGES["badinput"]);
    restart = readline.question();
  }
  //If User chooses 1, restarts program, if anything else, ends it.
  if (restart === "1") {
    runCalculator();
  } else if (restart === "2") {
    prompt(MESSAGES["thanks"]);
  }
}
