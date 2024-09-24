let humanScore = 0;
let computerScore = 0;
let gameOver = false;

function getComputerChoice() {
  const choices = ["rock", "paper", "scissors"];
  return choices[Math.floor(Math.random() * 3)];
}

function playRound(humanChoice, computerChoice) {
  if (gameOver) {
    return; // Stop the function if the game is over
  }

  let huChoice = `The human chose... ${humanChoice}`;
  let coChoice = `The computer chose... ${computerChoice}`;

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
    gameOver = true;
    disableButtons();
    document.getElementById("playAgainBtn").style.display = "inline";
  } else if (computerScore === 5) {
    winnerAnnouncement = "The computer has won!";
    gameOver = true;
    disableButtons();
    document.getElementById("playAgainBtn").style.display = "inline";
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

function disableButtons() {
  document.getElementById("rockBtn").disabled = true;
  document.getElementById("paperBtn").disabled = true;
  document.getElementById("scissorsBtn").disabled = true;
}

function resetGame() {
  humanScore = 0;
  computerScore = 0;
  gameOver = false;
  document.getElementById("huScore").innerText = humanScore;
  document.getElementById("coScore").innerText = computerScore;
  document.getElementById("huChoice").innerText = "The human chose...";
  document.getElementById("coChoice").innerText = "The computer chose...";
  document.getElementById("resultBox").textContent = "Who won the round?";
  document.getElementById("theWinner").innerText = "Who's it gonna be...?";
  document.getElementById("rockBtn").disabled = false;
  document.getElementById("paperBtn").disabled = false;
  document.getElementById("scissorsBtn").disabled = false;
  document.getElementById("playAgainBtn").style.display = "none";
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

document.getElementById("playAgainBtn").addEventListener("click", resetGame);
