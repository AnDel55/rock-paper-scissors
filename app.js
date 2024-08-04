function getComputerChoice() {
    let randomNum = Math.floor(Math.random() * 3)

    switch(randomNum) {
        case 0:
            console.log('Computer chose: rock');
            return 'rock';
        case 1:
            console.log('Computer chose: paper');
            return 'paper';
        case 2:
            console.log('Computer chose: scissors');
            return 'scissors';
    }

}

function getHumanChoice() {
    let choice = prompt('Enter rock, paper or scissors').toLowerCase();

    while(choice !== 'rock' && choice !== 'paper' && choice !== 'scissors') {
        choice = prompt('Wrong input, enter rock, paper or scissors').toLowerCase();
    }

    console.log(`You chose: ${choice}`);
    return choice
}

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice === 'rock' && computerChoice === 'scissors' ||
        humanChoice === 'paper' && computerChoice === 'rock' ||
        humanChoice === 'scissors' && computerChoice === 'paper') {
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
    for(let i=1; i <= 5; i++) {
        console.log(`Round: ${i}`);
        let humanChoice = getHumanChoice();
        let computerChoice = getComputerChoice();

        if(humanChoice == 'Wrong input') {
            i--;
        }

        console.log(playRound(humanChoice, computerChoice));
        console.log(`User score: ${humanScore}, Computer score: ${computerScore}`);
    }

    if(humanScore > computerScore) {
        return 'You won the game!'
    } else if(computerScore > humanScore) {
        return 'Computer won the game'
    } else {
        return 'The game is a tie'
    }
}

console.log(playGame());