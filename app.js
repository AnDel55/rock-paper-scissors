const options = document.querySelectorAll('.option');
const playerScoreDisplay = document.querySelector('.player-score');
const computerScoreDisplay = document.querySelector('.computer-score');

let playerScore = 0;
let computerScore = 0;

let playerChoice = '';
let computerChoice = '';

function updateDisplay() {
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function resetGame() {
    playerScore = 0;
    computerScore = 0;
    playerScoreDisplay.textContent = playerScore;
    computerScoreDisplay.textContent = computerScore;
}

function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3)

    switch(randomNum) {
        case 0:
            computerChoice = 'rock';
            break;
        case 1:
            computerChoice = 'paper';
            break;
        case 2:
            computerChoice = 'scissors';
            break;
    }

}

function playRound() {
    if(playerChoice === 'rock' && computerChoice === 'scissors' ||
        playerChoice === 'paper' && computerChoice === 'rock' ||
        playerChoice === 'scissors' && computerChoice === 'paper') {
        playerScore++;
        playerScoreDisplay.textContent = playerScore;
    } else if(playerChoice == computerChoice) {

    } else {
        computerScore++;
        computerScoreDisplay.textContent = computerScore;
    }

    updateDisplay();

    if (playerScore === 5) {
        alert('Congratulations! You won the game!');
        setTimeout(resetGame, 500);
    } else if (computerScore === 5) {
        alert('Sorry, the computer won the game.');
        setTimeout(resetGame, 500);
    }
}  

options.forEach((option) => {
    option.addEventListener('click', (e) => {
        playerChoice = e.target.id;
        getComputerChoice();
        playRound();
    })
})

// function playGame() {
//     
// }

// playGame();