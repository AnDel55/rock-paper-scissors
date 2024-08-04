function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3)

    switch(randomNum) {
        case 0:
            return 'rock';
        case 1:
            return 'paper';
        case 2:
            return 'scissors';
    }

}

function getHumanChoice() {
    let choice = prompt('Enter rock, paper or scissors').toLowerCase();

    if(choice != 'rock' && choice != 'paper' && choice != 'scissors') {
        return 'Wrong input'
    } else {
        return choice
    }
}

function playRound(humanChoice, computerChoice) {
    if(humanChoice == 'rock' && computerChoice == 'scissors' ||
        humanChoice == 'paper' && computerChoice == 'rock' ||
        humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++;
        return 'You win this round'
    } else if(humanChoice == computerChoice) {
        return 'Tie'
    } else {
        computerScore++;
        return 'Computer win this round'
    }
}



function playGame() {
    let humanScore = 0;
    let computerScore = 0;

    for(let i=1; i <= 5; i++) {
        console.log(`Round: ${i}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        console.log(playRound(humanChoice, computerChoice));
        console.log(`User score: ${humanScore}`);
        console.log(`Computer score: ${computerScore}`);
    }

    if(humanScore > computerScore) {
        return 'You won the game!'
    } else if(computerScore > humanScore) {
        return 'Computer won the game'
    } else {
        return 'Tie'
    }
}

console.log(playGame());