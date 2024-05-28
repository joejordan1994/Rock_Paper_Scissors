function getComputerChoice() {
  const options = [`rock`, `paper`, `scissors`];
  const randomIndex = Math.floor(Math.random() * 3);
  return computerOptions[randomIndex];
}

console.log(randomIndex);

function getHumanChoice() {
  const humanOptions = [`rock`, `paper`, `scissors`];
  let humanDecision = prompt(
    "Please enter one of the following: rock, paper, or scissors"
  ).toLowerCase();
  return humanDecision;
}

let humanScore = 0;
let computerScore = 0;

// 1.	I choose rock, opponent chooses rock: tie.

// 2.	I choose rock, opponent chooses paper: opponent wins.

// 3.	I choose rock, opponent chooses scissors: I win.

// 4.	I choose paper, opponent chooses rock: I win.

// 5.	I choose paper, opponent chooses paper: tie.

// 6.	I choose paper, opponent chooses scissors: opponent wins.

// 7.	I choose scissors, opponent chooses rock: opponent wins.

// 8.	I choose scissors, opponent chooses paper: I win.

// 9.	I choose scissors, opponent chooses scissors: tie.
