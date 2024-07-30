let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  let huChoice;
  let coChoice;
  huChoice = `Human choice: ${humanChoice}`;
  coChoice = `Computer choice: ${computerChoice}`;

  let resultText;

  if (humanChoice === computerChoice) {
    resultText = "It's a tie! No points.";
  } else if (
    (humanChoice === "rock" && computerChoice === "scissors") ||
    (humanChoice === "paper" && computerChoice === "rock") ||
    (humanChoice === "scissors" && computerChoice === "paper")
  ) {
    resultText = "The human won this round!";
    humanScore++;
  } else {
    resultText = "The computer won this round!";
    computerScore++;
  }

  console.log(`Your score: ${humanScore}, Computer score: ${computerScore}`);

  document.getElementById("huChoice").innerText = huChoice;

  document.getElementById("coChoice").innerText = coChoice;

  document.getElementById("resultBox").textContent = resultText;
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
