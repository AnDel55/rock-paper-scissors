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
    let humanChoice = prompt('Enter rock, paper or scissors').toLowerCase();

    if(humanChoice != 'rock' || 'paper' || 'scissors') {
        return 'Wrong input'
    } else {
        return humanChoice
    }
}