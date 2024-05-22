function getComputerChoice() {
    const computerChoices = [`rock`, `paper`, `scissors`];
    const randomIndex = Math.floor(Math.random() * 3);
    return computerChoices[randomIndex];
}

function getHumanChoice() {
    const humanChoices = [`rock`, `paper`, `scissors`];
    let humanChoice = prompt('Please enter one of the following: rock, paper, or scissors').toLowerCase();
    return humanChoice;
}

console.log(getHumanChoice());