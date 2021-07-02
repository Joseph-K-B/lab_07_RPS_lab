export function userWin(userChoice, computerChoice){
    if (userChoice === computerChoice) {
        return 'draw';
    }
    else if (userChoice === 'rock' && computerChoice === 'scissors') {
        return 'win';
    }
    else if (userChoice === 'rock' && computerChoice === 'paper'){
        return 'lose';
    }
    else if (userChoice === 'paper' && computerChoice === 'rock'){
        return 'win';
    }
    else if (userChoice === 'paper' && computerChoice === 'scissors'){
        return 'lose';
    }
    else if (userChoice === 'scissors' && computerChoice === 'paper'){
        return 'win';
    }
    else if (userChoice === 'scissors' && computerChoice === 'rock'){
        return 'lose';
    }
}