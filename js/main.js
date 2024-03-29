let playerCount = 0;
let computerCount = 0;

function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(computerChoice, playerChoice){
    if(computerChoice == 'Rock' && playerChoice == 'scissors' || computerChoice == 'Paper' && playerChoice == 'rock' || computerChoice == 'Scissors' && playerChoice == 'paper'){
        computerCount += 1;
        return ('You lose! ' + computerChoice + ' beats ' + playerChoice + '!');
    } else if(computerChoice == playerChoice) {
        return ('Its a Draw!')
    } else {
        playerCount += 1;
        return ('You win! ' + playerChoice + ' beats ' + computerChoice + '!');
    }
}

function playGame(){

    while(playerCount <= 5 || computerCount <= 5){
        const rock = document.querySelector('#rock');
        const paper = document.querySelector('#paper');
        const scissors = document.querySelector('#scissors');
        const output = document.querySelector('div');

        const computerChoice = getComputerChoice();

        rock.addEventListener('click', () => {
            const game = playRound(computerChoice, 'rock');
            output.textContent = game;

        });
        
        paper.addEventListener('click', () => {
            const game = playRound(computerChoice, 'paper');
            output.textContent = game;

        });

        scissors.addEventListener('click', () => {
            const game = playRound(computerChoice, 'scissors');
            output.textContent = game;

        });

        if(playerCount == 5){
            output.textContent = 'You win! You won 5 rounds!';
        }

        if(computerCount == 5){
            output.textContent = 'You lose! Computer won 5 rounds!';
        }
    }
}

playGame();
