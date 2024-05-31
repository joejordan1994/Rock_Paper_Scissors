const choices = [`rock`, `paper`, `scissors`];

function getComputerChoice() {
  let randomChoice = choices[Math.floor(Math.random() * 3)];
  console.log(randomChoice);
}

getComputerChoice();

function getHumanChoice() {
  let humanChoice = prompt(
    `Please choose either rock, paper, or scissors.`
  ).toLowerCase();
  console.log(humanChoice);
}

getHumanChoice();

if (randomChoice == humanChoice) {
  console.log(`It's a tie!`);
} else {
  console.log(`It's not a tie, one of y'all definitely won`);
}
