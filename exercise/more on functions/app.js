const startGameBtn = document.getElementById('start-game-btn');

const ROCK = 'ROCK';
const PAPER = 'PAPER';
const SCISSORS = 'SCISSORS';
const DEFAULT_PLAYER_CHOICE = ROCK;
const RESULT_DRAW = 'DRAW';
const RESULT_PLAYER_WINS = 'PLAYER_WINS';
const RESULT_COMP_WINS = 'COMPUTER_WINS';
let gameIsRunning = false;

const getPlayerChoice = function(){

  const selection = prompt('ROCK, PAPER or SCISSORS?', '').toUpperCase();

  if (selection !== ROCK &&
    selection !== PAPER &&
    selection !== SCISSORS) {
      alert(`Invalid selection input. We chose ${ROCK} for you`);
      return DEFAULT_PLAYER_CHOICE;  
    }

    return selection;
};

const getTheWinner = function(pChoice, cChoice) {
    if (pChoice === cChoice) {
        return RESULT_DRAW;
    } else if (pChoice === ROCK && cChoice === PAPER || 
               pChoice === SCISSORS && cChoice === ROCK || 
               pChoice === PAPER && cChoice === SCISSORS ) {
        return RESULT_COMP_WINS;
    } else {
        return RESULT_PLAYER_WINS;
    }
}

const computerChoice = function(){

    const randomValue = Math.random();

    if (randomValue < 0.34) {
        return ROCK;
    } else if (randomValue < 0.67) {
        return PAPER
    } else {
        return SCISSORS;
    }

};




startGameBtn.addEventListener('click', function(){
    if (gameIsRunning) {
        return;
    }

    gameIsRunning = true;
    console.log('Starting the game...'); 
    const playerSelection = getPlayerChoice();
    const computerSelection = computerChoice();
    const winner = getTheWinner(playerSelection, computerSelection);

    console.log(winner);
});