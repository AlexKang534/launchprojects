const readline = require("readline-sync");
const VALID_CHOICES = ["rock", "paper", "scissors", "lizard", "spock"];



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
    (playerOne === "rock" &&
      (computerChoice === "scissors" || computerChoice === "lizard")) ||
    (playerOne === "scissors" &&
      (computerChoice === "paper" || computerChoice === "lizard")) ||
    (playerOne === "paper" &&
      (computerChoice === "rock" || computerChoice === "spock")) ||
    (playerOne === "lizard" &&
      (computerChoice === "spock" || computerChoice === "paper")) ||
    (playerOne === "spock" &&
      (computerChoice === "scissors" || computerChoice === "rock"))
  ) {
    prompt(`You picked ${playerOne} so you win!`);
  } else if (
    (computerChoice === "rock" &&
      (playerOne === "scissors" || computerChoice === "lizard")) ||
    (computerChoice === "scissors" &&
      (playerOne === "paper" || computerChoice === "lizard")) ||
    (computerChoice === "paper" &&
      (playerOne === "rock" || computerChoice === "spock")) ||
    (computerChoice === "lizard" &&
      (playerOne === "spock" || playerOne === "paper")) ||
    (computerChoice === "spock" &&
      (playerOne === "scissors" || playerOne === "rock"))
  ) {
    prompt(`They picked ${computerChoice} so they win!`);
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
