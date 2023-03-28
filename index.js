const choices = ['rock', 'paper', 'scrissors'];

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function getPlayerChoice() {
    let playerSelection = " ";
    do {
        playerSelection = prompt("Pick something between rock, paper, scrissors !:").toLowerCase();

    } while (!((playerSelection === 'rock') ||
        (playerSelection === 'paper') ||
        (playerSelection === 'scrissors')));
    return playerSelection;
}
let computerSelection;
let playerSelection;

let playerCount = 0;
let computerCount = 0;
// let computerSelection = getComputerChoice();
// let playerSelection = getPlayerChoice();

function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return console.log("It's a tie you both picked " + playerSelection + "!");

    } else if ((playerSelection === 'rock') && (computerSelection === 'scrissors')) {
        playerCount++;
        return console.log("You win! Rock beats Scrissors!");

    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        computerCount++;
        return console.log("You lose! Paper beats Rock!")

    } else if ((playerSelection === 'paper') && (computerSelection === 'scrissors')) {
        computerCount++;
        return console.log("You lose! Scrissors beats Paper");

    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        playerCount++;
        return console.log("You win! Paper beats Rock");

    } else if ((playerSelection === 'scrissors') && (computerSelection === 'rock')) {
        computerCount++;
        return console.log("You lose! Rock beats Scrissors!")

    } else {
        playerCount++;
        return console.log("You win! Scrissors beats Paper!");
    }
}

const i = prompt("How many games do you wanna play?");
let counter = 0;

function game() {
    while (counter < i) {
        playerSelection = getPlayerChoice();
        computerSelection = getComputerChoice();

        console.log(playerSelection);
        console.log(computerSelection);

        play(playerSelection, computerSelection);
        counter++;
    }
    if (playerCount === computerCount) {
        return console.log("\nIt's a tie!");

    } else if (playerCount < computerCount) {
        return console.log("\nThe computer won!");
    } else return console.log("\nYou won!");
}

//console.log(playerSelection);
//console.log(computerSelection);
// play(playerSelection, computerSelection);
game();