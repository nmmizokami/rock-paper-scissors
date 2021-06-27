function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);

}

function computerPlay() {
    let options = ['rock', 'paper', 'scissors'];
    return options[getRandomInt(0, 3)];
}

function userPlay() {
    let playerChoice;
    while(playerChoice !== 'rock' && playerChoice !== 'paper' && playerChoice !== 'scissors')
        playerChoice = window.prompt('rock, paper, or scissors?').toLowerCase();
    return playerChoice;
    
}

function playRound() {
    computerChoice = computerPlay();
    userChoice = userPlay();

    if(computerChoice === 'rock' && userChoice === 'rock')
        playRound();
    if(computerChoice === 'rock' && userChoice === 'scissors')
        return 'You lose! Rock beats scissors';
    if(computerChoice === 'rock' && userChoice === 'paper')
        return 'You win! Paper beats rock';
    if(computerChoice === 'scissors' && userChoice === 'scissors')
        playRound();
    if(computerChoice === 'scissors' && userChoice === 'rock')
        return 'You win! Rock beats scissors';
    if(computerChoice === 'scissors' && userChoice === 'paper')
        return 'You lose! Scissors beats paper';
    if(computerChoice === 'paper' && userChoice === 'paper')
        playRound();
    if(computerChoice === 'paper' && userChoice === 'rock')
        return 'You lose! Paper beats rock';
    if(computerChoice === 'paper' && userChoice === 'scissors')
        return 'You win! Scissors beats paper';
}

function game() {
    let numberOfWins = numberOfLosses = 0;

    for(let i = 0; i < 5; ++i) {
        let outcome = playRound();
        if(outcome.includes('win'))
            ++numberOfWins;
        else
            ++numberOfLosses;
    }

    console.log('Wins: ' + numberOfWins);
    console.log('Losses: ' + numberOfLosses);

    if(numberOfWins > numberOfLosses)
        console.log('You win!');
    else
        console.log('You lose!');
}