const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors"];

function prompt(message) {
  console.log(`=> ${message}`);
}

while (true) {
  prompt(`Choose one ${VALID_CHOICES.join(",")}`);
  let playerOne = readline.question();
  while (!VALID_CHOICES.includes(playerOne)) {
    prompt("That's not a valid choice");
    playerOne = readline.question();
  }
  let randomIndex = Math.floor(Math.random() * VALID_CHOICES.length);
  let computerChoice = VALID_CHOICES[randomIndex];
  prompt(`You chose ${playerOne}, computer chose ${computerChoice}`);
  if (
    (playerOne === "rock" && computerChoice === "scissors") ||
    (playerOne === "scissors" && computerChoice === "paper") ||
    (playerOne === "paper" && computerChoice === "rock")
  ) {
    prompt(`${playerOne} wins!`);
  } else if (
    (computerChoice === "rock" && playerOne === "scissors") ||
    (computerChoice === "scissors" && playerOne === "paper") ||
    (computerChoice === "paper" && playerOne === "rock")
  ) {
    prompt(`${computerChoice} wins!`);
  } else {
    prompt("It's a tie");
  }
  prompt("Do you want to play again? (y/n)");
  let answer = readline.question().toLowerCase();
  while (answer[0] !== "n" && answer[0] !== "y") {
    prompt("Please enter 'y' or 'n'.");
    answer = readline.question().toLowerCase();
  }
  if (answer[0] !== "y") {
    prompt("Thanks for playing");
    break;
  }
}
