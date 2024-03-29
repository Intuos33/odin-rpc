var playerCount = 0;
var computerCount = 0;

function getComputerChoice(){
    let choices = ['Rock', 'Paper', 'Scissors'];
    let choice = Math.floor(Math.random() * 3);
    return choices[choice];
}

function playRound(computerChoice, playerChoice){
    if(computerChoice == 'Rock' && playerChoice == 'scissors' || computerChoice == 'Paper' && playerChoice == 'rock' || computerChoice == 'Scissors' && playerChoice == 'paper'){
        computerCount += 1;
        return ('You lose! ' + computerChoice + ' beats ' + playerChoice + '!');
    } else if(playerChoice == 'rock' && computerChoice == 'Scissors' || playerChoice == 'paper' && computerChoice == 'Rock' || playerChoice == 'scissors' && computerChoice == 'Paper') {
        playerCount += 1;
        return ('You win! ' + playerChoice + ' beats ' + computerChoice + '!');
    } else {
        return ('Its a Draw!')
    } 
}

function check(playerChoice){
    const output = document.querySelector('div');
    const computerChoice = getComputerChoice();

    console.log(playerCount, computerCount);
    console.log(playerChoice, computerChoice);

    const game = playRound(computerChoice, playerChoice);
    output.textContent = game +  '    Score: You - ' + playerCount + '    AI - ' + computerCount;

    if(playerCount >= 5){
        output.textContent = 'You win! You won 5 rounds!';
        playerCount = 0;
        computerCount = 0;
    } 
    
    if(computerCount >= 5){
        output.textContent = 'You lose! Computer won 5 rounds!';
        playerCount = 0;
        computerCount = 0;
    } 
}

function playGame(){

    const rock = document.querySelector('#rock');
    const paper = document.querySelector('#paper');
    const scissors = document.querySelector('#scissors');

    rock.addEventListener('click', () => {
        playerChoice = rock.textContent.toLowerCase();
        check(playerChoice);
    });
        
    paper.addEventListener('click', () => {
        playerChoice = paper.textContent.toLowerCase();
        check(playerChoice);
    });

    scissors.addEventListener('click', () => {
        playerChoice = scissors.textContent.toLowerCase();
        check(playerChoice);
    });
}

playGame();
