const ATTACK = 'ATTACK';
const STRONG_ATTACK = 'STRONG_ATTACK';
const ATTACK_VALUE = 10;
const MONSTER_ATTACK_VALUE = 14;
const STRONG_ATTACK_VALUE = 17;
const HEAL_VALUE = 20;

const LOG_EVENT_PLAYER_ATTACK = 'PLAYER_ATTACK';
const LOG_EVENT_PLAYER_STRONG_ATTACK = 'PLAYER_STRONG_ATTACK';
const LOG_EVENT_MONSTER_ATTACK = 'MONSTER_ATTACK';
const LOG_EVENT_PLAYER_HEAL = 'PLAYER_HEAL';
const LOG_EVENT_GAME_OVER = 'GAME_OVER';

const enteredValue = prompt('Max life for you and the Monster', '100');

let chosenMaxLife = +enteredValue;
let gameLog = [];

if (isNaN(chosenMaxLife) || chosenMaxLife <= 0) {
    chosenMaxLife = 100;
}

let currentMonsterHealth = chosenMaxLife;
let currentPlayerHealth = chosenMaxLife;
let hasBonusLife = true;

adjustHealthBars(chosenMaxLife);

function writeLog (event, value, monsterHealth, playerHealth) {

    let logEntry;

    if (event === LOG_EVENT_PLAYER_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth, 
            finalPlayerHealth: playerHealth 
        };

    } else if (event === LOG_EVENT_PLAYER_STRONG_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: 'MONSTER',
            finalMonsterHealth: monsterHealth, 
            finalPlayerHealth: playerHealth 
    };

    } else if (event === LOG_EVENT_MONSTER_ATTACK) {
        logEntry = {
            event: event,
            value: value,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth, 
            finalPlayerHealth: playerHealth 
        };

    } else if (event === LOG_EVENT_PLAYER_HEAL) {
        logEntry = {
            event: event,
            value: value,
            target: 'PLAYER',
            finalMonsterHealth: monsterHealth, 
            finalPlayerHealth: playerHealth 
        };
    } else if (event === LOG_EVENT_GAME_OVER) {
       
      logEntry = {
        event: event,
        value: value,
        finalMonsterHealth: monsterHealth,
        finalPlayerHealth: playerHealth
      };
    }

    gameLog.push(logEntry);
}



function reset() {
    currentPlayerHealth = chosenMaxLife;
    currentMonsterHealth = chosenMaxLife;
    resetGame(chosenMaxLife);
}

function endRound() {
    let initialPlayerHealth = currentPlayerHealth;
    const playerDamage = dealPlayerDamage(MONSTER_ATTACK_VALUE);
    currentPlayerHealth-=playerDamage;

    writeLog(LOG_EVENT_MONSTER_ATTACK,
             playerDamage,
             currentMonsterHealth,
             currentPlayerHealth);

    if (currentPlayerHealth <= 0 && hasBonusLife) {
        hasBonusLife = false;
        removeBonusLife();
        currentPlayerHealth = initialPlayerHealth;
        setPlayerHealth(currentPlayerHealth);
        alert('You would be dead but the bonus life saved you!');
    }

    if (currentMonsterHealth <= 0 && currentPlayerHealth > 0) {
        alert('You won!');
        writeLog(
            LOG_EVENT_GAME_OVER,
            'PLAYER WON',
            currentMonsterHealth,
            currentPlayerHealth
        )

    } else if (currentPlayerHealth <= 0 && currentMonsterHealth > 0) {
        alert('You lost!');
        writeLog(
            LOG_EVENT_GAME_OVER,
            'MONSTER WON', 
            currentMonsterHealth,
            currentPlayerHealth
        )
    } else if (currentMonsterHealth <= 0 && currentPlayerHealth <= 0){ 
        alert('You have a draw!');
        writeLog(
            LOG_EVENT_GAME_OVER,
            'A DRAW',
            currentMonsterHealth,
            currentPlayerHealth
        )
    }
    
    if (currentMonsterHealth <= 0 || currentPlayerHealth <= 0 ) {
        
            reset();
    }
}



function attackMonster(mode) {
    let maxDamage;
    let logEvent;

    switch (mode) {
        case ATTACK:
            maxDamage = ATTACK_VALUE;
            logEvent = LOG_EVENT_PLAYER_ATTACK;
            break;
        case STRONG_ATTACK:
            maxDamage = STRONG_ATTACK_VALUE;
            logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
        break;
    
        default:
            break;
    }

    // if (mode === ATTACK) {
    //     maxDamage = ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_ATTACK;
    // } else if (mode === STRONG_ATTACK) {
    //     maxDamage = STRONG_ATTACK_VALUE;
    //     logEvent = LOG_EVENT_PLAYER_STRONG_ATTACK;
    // }

    const damage = dealMonsterDamage(maxDamage);
    currentMonsterHealth-=damage;
    writeLog(
        logEvent,
        damage,
        currentMonsterHealth,
        currentPlayerHealth
    );

    endRound();

}

function attackHandler() {
    attackMonster(ATTACK);

}

function strongAttackHandler() {
   attackMonster(STRONG_ATTACK);
}

function healPlayerHandler() {
 let healValue;
 if (currentPlayerHealth >= chosenMaxLife-HEAL_VALUE) {

    alert("You can't heal to more than max initial health.");
    healValue = chosenMaxLife-currentPlayerHealth;
 } else {
    healValue = HEAL_VALUE;
 }

 increasePlayerHealth(healValue);
 currentPlayerHealth+=healValue;
 writeLog(
    LOG_EVENT_PLAYER_HEAL,
    healValue,
    currentMonsterHealth,
    currentPlayerHealth
 );

 endRound();
}

function printLogHandler() {
    // console.log(gameLog);

    // for (let i = 0; i < gameLog.length; i++) {
    //     console.log(gameLog[i]);
        
    // }

    // for (const log of gameLog) {
    //     console.log(log);
    // }

    const users = [
        {
           name: 'Anna', 
           age: 22 
        },
        {
           name: 'Petar',
           age: 34
        },
        {
           name: 'Mimi',
           age: 44
        }
    ];

for (const user of users) {

    for (const key in user) {
        
        console.log(user['name']);
    }
   
}

  }

attackBtn.addEventListener('click', attackHandler);
strongAttackBtn.addEventListener('click', strongAttackHandler);
healBtn.addEventListener('click', healPlayerHandler);
logBtn.addEventListener('click', printLogHandler);
