const choices = ['rock', 'paper', 'scrissors'];

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

let playerSelection = "";

do {
    playerSelection = prompt("Pick something between rock, paper, scrissors !:").toLowerCase();
} while (!((playerSelection === 'rock') ||
    (playerSelection === 'paper') ||
    (playerSelection === 'scrissors')));

let computerSelection = getComputerChoice();

function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return console.log("It's a tie you both picked " + playerSelection + "!");
    } else if ((playerSelection === 'rock') && (computerSelection === 'scrissors')) {
        return console.log("You win! Rock beats Scrissors!");
    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        return console.log("You lose! Paper beats Rock!")
    } else if ((playerSelection === 'paper') && (computerSelection === 'scrissors')) {
        return console.log("You lose! Scrissors beats Paper");
    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        return console.log("You win! Paper beats Rock");
    } else if ((playerSelection === 'scrissors') && (computerSelection === 'rock')) {
        return console.log("You lose! Rock beats Scrissors!")
    } else return console.log("You win! Scrissors beats Paper!");
}

console.log(playerSelection);
console.log(computerSelection);
play(playerSelection, computerSelection);