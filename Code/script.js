let humanScore = 0;
let computerScore = 0;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  let huChoice;
  let coChoice;
  huChoice = `The human chose... ${humanChoice}`;
  coChoice = `The computer chose... ${computerChoice}`;

  let resultText;
  let winnerAnnouncement;

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

  if (humanScore === 5) {
    winnerAnnouncement = "The human has won!";
  } else if (computerScore === 5) {
    winnerAnnouncement = "The computer has won!";
  } else if (humanScore > 5 || computerScore > 5) {
    winnerAnnouncement = "The game is over, refresh to play again!";
  } else {
    winnerAnnouncement = "Who's it gonna be...?";
  }

  document.getElementById("huChoice").innerText = huChoice;

  document.getElementById("coChoice").innerText = coChoice;

  document.getElementById("resultBox").textContent = resultText;

  document.getElementById("theWinner").innerText = winnerAnnouncement;

  document.getElementById("huScore").innerText = humanScore;

  document.getElementById("coScore").innerText = computerScore;
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
