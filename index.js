const choices = ['rock', 'paper', 'scrissors'];
const rockButton = document.createElement('button');
const paperButton = document.createElement('button');
const scrissorsButton = document.createElement('button');
const body = document.querySelector('body');
const container = document.createElement('div');
const paraResult = document.createElement('p');
const paraYourScore = document.createElement('p');
const paraComputerScore = document.createElement('p');

let computerSelection;
let playerSelection;

rockButton.addEventListener('click', (e) => {
    play(e.target.textContent.toLowerCase(), getComputerChoice());
});

paperButton.addEventListener('click', (e) => {
    play(e.target.textContent.toLowerCase(), getComputerChoice());
});

scrissorsButton.addEventListener('click', (e) => {
    play(e.target.textContent.toLowerCase(), getComputerChoice());
});

scrissorsButton.textContent = "Scrissors";
scrissorsButton.style.cssText = "padding: 6px 30px; margin-top: 10px; border:none; border-radius:6px; background-color:rgb(100,140,30); color:white;";

paperButton.textContent = "Paper";
paperButton.style.cssText = "padding: 6px 30px; margin-top: 10px; border:none; border-radius:6px; background-color:rgb(100,140,30); color:white;";

rockButton.textContent = "Rock";
rockButton.style.cssText = "padding: 6px 30px; margin-top: 10px; border:none; border-radius:6px; background-color:rgb(100,140,30); color:white;";

body.style.cssText = "display:flex; justify-content:center; align-items:center; flex-direction:column; background-color:rgb(123,40,50);";
container.style.cssText = "height:250px; width:500px; background-color: rgb(20,50,100); margin-top:20px; text-align:center;";
paraResult.style.cssText = "height:30px; margin-top:50px; color:white;";

paraYourScore.textContent = "You: " + 0;
paraYourScore.style.cssText = "text-align:left; padding-left:50px; font-size:30px; margin-top:50px; color:white;"

paraComputerScore.textContent = "Computer: " + 0;
paraComputerScore.style.cssText = "text-align:right; padding-right:50px; font-size:30px; margin-top:-62px;color:white;";

body.appendChild(rockButton);
body.appendChild(paperButton);
body.appendChild(scrissorsButton);
body.appendChild(container);
container.appendChild(paraResult);
container.appendChild(paraYourScore);
container.appendChild(paraComputerScore);

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

let playerCount = 0;
let computerCount = 0;
// let computerSelection = getComputerChoice();
// let playerSelection = getPlayerChoice();

//function that checks each posible output for rock-paper-scrissors
function play(playerSelection, computerSelection) {
    if (playerSelection === computerSelection) {
        return paraResult.textContent = "It's a tie you both picked " + playerSelection + "!";

    } else if ((playerSelection === 'rock') && (computerSelection === 'scrissors')) {
        playerCount++;
        paraYourScore.textContent = "You: " + +playerCount;
        return paraResult.textContent = "You win! Rock beats Scrissors!";

    } else if ((playerSelection === 'rock') && (computerSelection === 'paper')) {
        computerCount++;
        paraComputerScore.textContent = "Computer: " + +computerCount;
        return paraResult.textContent = "You lose! Paper beats Rock!";

    } else if ((playerSelection === 'paper') && (computerSelection === 'scrissors')) {
        computerCount++;
        paraComputerScore.textContent = "Computer: " + +computerCount;
        return paraResult.textContent = "You lose! Scrissors beats Paper";

    } else if ((playerSelection === 'paper') && (computerSelection === 'rock')) {
        playerCount++;
        paraYourScore.textContent = "You: " + +playerCount;
        return paraResult.textContent = "You win! Paper beats Rock";

    } else if ((playerSelection === 'scrissors') && (computerSelection === 'rock')) {
        computerCount++;
        paraComputerScore.textContent = "Computer: " + +computerCount;
        return paraResult.textContent = "You lose! Rock beats Scrissors!";

    } else {
        playerCount++;
        paraYourScore.textContent = "You: " + +playerCount;
        return paraResult.textContent = "You win! Scrissors beats Paper!";
    }
}

//verify if what the user types is a number or not
// let i;
// do {
//     i = Number(prompt("How many games do you wanna play?"));
// }
// while (isNaN(i));

// let counter = 0;

//this function runs for more games at a time, based on the number given by the user
// function game() {
//     while (counter < i) {
//         playerSelection = getPlayerChoice();
//         computerSelection = getComputerChoice();

//         console.log(playerSelection);
//         console.log(computerSelection);

//         play(playerSelection, computerSelection);
//         counter++;
//     }
//     if (playerCount === computerCount) {
//         return console.log("\nIt's a tie!");

//     } else if (playerCount < computerCount) {
//         return console.log("\nThe computer won!");
//     } else return console.log("\nYou won!");
// }

//console.log(playerSelection);
//console.log(computerSelection);
// play(playerSelection, computerSelection);
//game();

