const choices = ['rock', 'paper', 'scrissors'];

//function to get a random choice
function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

//function that asks the user for a choice, if the choice is not correct then the user it's asked again
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

//function that checks each posible output for rock-paper-scrissors
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

//verify if what the user types is a number or not
let i;
do {
    i = Number(prompt("How many games do you wanna play?"));
}
while (isNaN(i));

let counter = 0;

//this function runs for more games at a time, based on the number given by the user
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