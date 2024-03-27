function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(computerChoice, playerChoice){
    if(computerChoice == 'Rock' && playerChoice == 'scissors' || computerChoice == 'Paper' && playerChoice == 'rock' || computerChoice == 'Scissors' && playerChoice == 'paper'){
        return ('You lose! ' + computerChoice + ' beats ' + playerChoice + '!');
    } else {
        return ('You win! ' + playerChoice + ' beats ' + computerChoice + '!');
    }
}

function getPlayerChoice(){
    const choice = prompt('Rock, Paper, or Scissors? ');
    return choice.toLowerCase();
}

function playGame(){
    let game = 0;
    while(game <= 4){
        const computerChoice = getComputerChoice();
        const playerChoice = getPlayerChoice();
        console.log(playRound(computerChoice, playerChoice));
        game += 1;
    }
}

playGame();