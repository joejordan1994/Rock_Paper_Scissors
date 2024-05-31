/* Write a program that allows a user to decide between rock, paper, or scissors. 
Also create a random index for the computer to randomly choose between rock, paper, or scissors. 
Each time that both the computer and the user have made their selection, 
compare the two choices to determine the winner and keep score by adding 1 point to either the computer or the user. 
The first player to 5 points wins, then the game resets. */

/*When the user inputs their choice, compare it to the random choice made by the computer to determine
who wins the first point*/


/*The desired output is a declaration of who the winner is, followed by a score update*/

/*When a user inputs which choice they want to make, run a random choice generator for the computer to determine
the computer's choice. Decide the winner by a set of rules for what beats what*/

function getComputerChoice() {
    const choices = [`rock`, `paper`, `scissors`];
    const randomChoice = choices[Math.floor(Math.random() * 3)];
    console.log(randomChoice);
}

