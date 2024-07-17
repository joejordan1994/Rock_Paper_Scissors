let humanScore = 0;
let computerScore = 0;

function playGame() {
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

  function playRound(getHumanChoice, getComputerChoice) {
    if (randomChoice === humanChoice) {
      console.log("It's a tie! No points.");
      computerScore += 0;
      humanScore += 0;
      console.log(
        `Your score: ${humanScore}, Computer score: ${computerScore}.`
      );
    } else if (randomChoice === "rock" && humanChoice === "paper") {
      console.log("You won! Paper beats rock. 1 point to you.");
      humanScore++;
      console.log(
        `Your score: ${humanScore}, Computer score: ${computerScore}.`
      );
    } else if (randomChoice === "rock" && humanChoice === "scissors") {
      console.log(
        "Computer won! Rock beats scissors. 1 point to the computer."
      );
      computerScore++;
      console.log(
        `Your score: ${humanScore}, Computer score: ${computerScore}.`
      );
    } else if (randomChoice === "paper" && humanChoice === "rock") {
      console.log("Computer won! Paper beats rock. 1 point to the computer.");
      computerScore++;
      console.log(
        `Your score: ${humanScore}, Computer score: ${computerScore}.`
      );
    } else if (randomChoice === "paper" && humanChoice === "scissors") {
      console.log("You won! Scissors beats paper. 1 point to you.");
      humanScore++;
      console.log(
        `Your score: ${humanScore}, Computer score: ${computerScore}.`
      );
    } else if (randomChoice === "scissors" && humanChoice === "rock") {
      console.log("You won! Rock beats scissors. 1 point to you.");
      humanScore++;
      console.log(
        `Your score: ${humanScore}, Computer score: ${computerScore}.`
      );
    } else if (randomChoice === "scissors" && humanChoice === "paper") {
      console.log(
        "Computer won! Scissors beats paper. 1 point to the computer."
      );
      computerScore++;
      console.log(
        `Your score: ${humanScore}, Computer score: ${computerScore}.`
      );
    } else {
      console.log(
        "Invalid input. Please choose either rock, paper, or scissors."
      );
    }
  }

  playRound();
}

playGame();
