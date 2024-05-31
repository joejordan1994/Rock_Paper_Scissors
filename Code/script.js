let randomChoice;
let humanChoice;

function getComputerChoice() {
  const choices = [`rock`, `paper`, `scissors`];
  randomChoice = choices[Math.floor(Math.random() * 3)];
  return randomChoice;
}

getComputerChoice();

function getHumanChoice() {
  humanChoice = prompt(
    `Please choose either rock, paper, or scissors.`
  ).toLowerCase();
  return humanChoice;
}

console.log(getHumanChoice());
console.log(getComputerChoice());

function determineWinner() {
  if (randomChoice === humanChoice) {
    console.log("It's a tie!");
  } else if (randomChoice === "rock" && humanChoice === "paper") {
    console.log("You won! Paper beats rock.");
  } else if (randomChoice === "rock" && humanChoice === "scissors") {
    console.log("Computer won! Rock beats scissors.");
  } else if (randomChoice === "paper" && humanChoice === "rock") {
    console.log("Computer won! Paper beats rock.");
  } else if (randomChoice === "paper" && humanChoice === "scissors") {
    console.log("You won! Scissors beat paper.");
  } else if (randomChoice === "scissors" && humanChoice === "rock") {
    console.log("You won! Rock beats scissors.");
  } else if (randomChoice === "scissors" && humanChoice === "paper") {
    console.log("Computer won! Scissors beat paper.");
  } else {
    console.log(
      "Invalid input. Please choose either rock, paper, or scissors."
    );
  }
}

determineWinner();
