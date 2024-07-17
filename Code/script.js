let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  console.log(`Human choice: ${humanChoice}`);
  console.log(`Computer choice: ${computerChoice}`);

  if (humanChoice === computerChoice) {
    console.log("It's a tie! No points.");
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    console.log("You won this round!");
    humanScore++;
  } else {
    console.log("Computer won this round!");
    computerScore++;
  }

  console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);
}

document.getElementById("rockBtn").addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("rock", computerChoice);
});

document.getElementById("paperBtn").addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("paper", computerChoice);
});

document.getElementById("scissorsBtn").addEventListener("click", () => {
  const computerChoice = getComputerChoice();
  playRound("scissors", computerChoice);
});
