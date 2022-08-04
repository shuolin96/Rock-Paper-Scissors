let playerScore = 0;
let computerScore = 0;

function getComputerChoice() {
    let choice = ['rock', 'paper', 'scissors'];
    let random_number = Math.floor(Math.random() * 3);
    return choice[random_number]
}

function playRound(playerSelection) {
    let computerSelection = getComputerChoice();
    if (playerSelection === 'rock') {
        if (computerSelection === 'rock') {
            return "No Winner!"
        } else if (computerSelection === 'scissors') {
            playerScore ++;
            return "You Win! Rock beats Scissors"
        } else {
            computerScore ++;
            return "You Lose! Paper beats Rock"
        }
    } else if (playerSelection === 'paper') {
        if (computerSelection === 'paper') {
            return "No Winner!"
        } else if (computerSelection === 'rock') {
            playerScore ++;
            return "You Win! Paper beats Rock"
        } else {
            computerScore ++;
            return "You Lose! Scissors beats Paper"
        }
    } else if (playerSelection === 'scissors') {
        if (computerSelection === 'scissors') {
            return "No Winner!"
        } else if (computerSelection === 'paper') {
            playerScore ++;
            return "You Win! Scissors beats Paper"
        } else {
            computerScore ++;
            return "You Lose! Rock beats Scissors"
        }       
    } 
}

let buttons = document.querySelectorAll('button');
let board = document.querySelector('.board');
let score = document.querySelector('.score');

buttons.forEach(button => {
    button.addEventListener('click', function () {
        board.textContent = playRound(this.value);
        score.textContent = `Your Score: ${playerScore} Computer Score: ${computerScore}`;
        if (playerScore === 5) alert("You win!");
        if (computerScore === 5) alert("You lost!")
    });
})

