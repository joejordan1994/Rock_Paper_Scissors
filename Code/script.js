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

getHumanChoice();

function determineTie() {
  if (randomChoice === humanChoice) {
    console.log(`It's a tie!`);
  } else {
    console.log(`It's not a tie, one of y'all definitely won`);
  }
}

determineTie();
