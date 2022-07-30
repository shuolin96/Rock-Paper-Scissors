function getComputerChoice() {
    let choice;
    let random_number = Math.floor(Math.random() * 3);
    if (random_number === 0) {
        choice = 'Rock';
    } else if (random_number === 1) {
        choice = 'Paper';
    } else {
        choice = 'Scissors';
    }
    console.log(choice)
    return choice;
}
 

let playerScore = 0;
let computerScore = 0;

function playRound(playerSelection, computerSelection) {
    if (playerSelection.toLowerCase() === 'rock') {
        if (computerSelection.toLowerCase() === 'rock') {
            return "No Winner!"
        } else if (computerSelection.toLowerCase() === 'scissors') {
            playerScore ++;
            return "You Win! Rock beats Scissors"
        } else {
            computerScore ++;
            return "You Lose! Paper beats Rock"
        }
    } else if (playerSelection.toLowerCase() === 'paper') {
        if (computerSelection.toLowerCase() === 'paper') {
            return "No Winner!"
        } else if (computerSelection.toLowerCase() === 'rock') {
            playerScore ++;
            return "You Win! Paper beats Rock"
        } else {
            computerScore ++;
            return "You Lose! Scissors beats Paper"
        }
    } else if (playerSelection.toLowerCase() === 'scissors') {
        if (computerSelection.toLowerCase() === 'scissors') {
            return "No Winner!"
        } else if (computerSelection.toLowerCase() === 'paper') {
            playerScore ++;
            return "You Win! Scissors beats Paper"
        } else {
            computerScore ++;
            return "You Lose! Rock beats Scissors"
        }       
    } else {
        return "Please Input Rock, Paper or Scissors!"
    }
}

function game() {

    for (let i = 0; i < 5; i++) {

        let playerSelection = prompt("Please input your choice: ");
        let computerSelection = getComputerChoice();
        console.log(playRound(playerSelection, computerSelection));
    }
    if (playerScore > computerScore) {
        console.log(`Your Score: ${playerScore} {\n} Computer Score: ${computerScore}`);
        console.log("You Win!");
    } else {
        console.log(`Your Score: ${playerScore} {\n} Computer Score: ${computerScore}`);
        console.log("You Lose!") ;
    }
}

game()

