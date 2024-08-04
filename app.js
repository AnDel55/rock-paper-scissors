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

let humanScore = 0;
let computerScore = 0;

function playRound(humanChoice, computerChoice) {
    if(humanChoice == 'rock' && computerChoice == 'scissors' ||
       humanChoice == 'paper' && computerChoice == 'rock' ||
       humanChoice == 'scissors' && computerChoice == 'paper') {
        humanScore++;
        return 'You win!'
    } else if(humanChoice == computerChoice) {
        return 'Tie'
    } else {
        computerScore++;
        return 'Computer won'
    }
}

let humanChoice = getHumanChoice();
let computerChoice = getComputerChoice();

console.log(playRound(humanChoice, computerChoice));
console.log(`User score: ${humanScore}`);
console.log(`Computer score: ${computerScore}`);