console.log("Hello world!");
const choices = ['Rock', 'Paper', 'Scrissors'];

function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function play(playerSelection, computerSelection) {
}

let playerSelection = "";
do {
    playerSelection = prompt("Pick something between rock, paper, scrissors!:").toLowerCase();
} while ((playerSelection !== 'rock'))
// (playerSelection !== 'paper') ||
//     (playerSelection !== 'scrissors'));

const computerSelection = getComputerChoice();

console.log(computerSelection);
console.log(playerSelection);