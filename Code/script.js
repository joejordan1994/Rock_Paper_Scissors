let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = [`rock`, `paper`, `scissors`];
  return choices[Math.floor(Math.random() * 3)];
}

getComputerChoice();

function getHumanChoice() {
  humanChoice = prompt(
    `Please choose either rock, paper, or scissors.`
  ).toLowerCase();
  return humanChoice;
}

const randomChoice = getComputerChoice();

console.log(getHumanChoice());
console.log(getComputerChoice());

function playRound(getHumanChoice, getComputerChoice) {
  if (randomChoice === humanChoice) {
    console.log("It's a tie! No points.");
    computerScore += 0;
    humanScore += 0;
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}.`);
  } else if (randomChoice === "rock" && humanChoice === "paper") {
    console.log("You won! Paper beats rock. 1 point to you.");
    humanScore++;
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}.`);
  } else if (randomChoice === "rock" && humanChoice === "scissors") {
    console.log("Computer won! Rock beats scissors. 1 point to the computer.");
    computerScore++;
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}.`);
  } else if (randomChoice === "paper" && humanChoice === "rock") {
    console.log("Computer won! Paper beats rock. 1 point to the computer.");
    computerScore++;
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}.`);
  } else if (randomChoice === "paper" && humanChoice === "scissors") {
    console.log("You won! Scissors beats paper. 1 point to you.");
    humanScore++;
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}.`);
  } else if (randomChoice === "scissors" && humanChoice === "rock") {
    console.log("You won! Rock beats scissors. 1 point to you.");
    humanScore++;
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}.`);
  } else if (randomChoice === "scissors" && humanChoice === "paper") {
    console.log("Computer won! Scissors beats paper. 1 point to the computer.");
    computerScore++;
    console.log(`Your score: ${humanScore}, Computer score: ${computerScore}.`);
  } else {
    console.log(
      "Invalid input. Please choose either rock, paper, or scissors."
    );
  }
}

document
  .getElementById("rockBtn")
  .addEventListener("click", () => playRound("rock", getComputerChoice()));
document
  .getElementById("paperBtn")
  .addEventListener("click", () => playRound("paper", getComputerChoice()));
document
  .getElementById("scissorsBtn")
  .addEventListener("click", () => playRound("scissors", getComputerChoice()));
