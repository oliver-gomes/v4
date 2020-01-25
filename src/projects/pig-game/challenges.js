/*
GAME RULES:

- The game has 2 players, playing in rounds
- In each turn, a player rolls a dice as many times as he whishes. Each result get added to his ROUND score
- BUT, if the player rolls a 1, all his ROUND score gets lost. After that, it's the next player's turn
- The player can choose to 'Hold', which means that his ROUND score gets added to his GLBAL score. After that, it's the next player's turn
- The first player to reach 100 points on GLOBAL score wins the game

*/

var scores, roundScore, activePlayer, dice, gamePlaying;
init();

var lastDice;
document.querySelector('.btn-roll').addEventListener('click' , function(){
  
  if(gamePlaying){

  // 1. Random number
  var dice1 = Math.floor(Math.random() * 6) + 1; //random number from 0 - 6
  var dice2 = Math.floor(Math.random() * 6) + 1; //random number from 0 - 6

  // 2. Display the result
  var diceDOM = document.querySelector('.dice');
  document.querySelector('#current-' + activePlayer).textContent = dice;
  document.getElementById('dice-1').style.display = 'block';
  document.getElementById('dice-2').style.display = 'block';
  //diceDOM.style.display = 'block';
  document.getElementById('dice-1').src = 'dice-' + dice1 + '.png';
  document.getElementById('dice-1').src = 'dice-' + dice2 + '.png';
  // diceDOM.src = 'dice-' + dice + '.png';


  // 3. Update the round score IF the rolled number was NOT a 1
  if (dice === 6 && lastDice === 6){
    //Player looses score
    scores[activePlayer] = 0;
    document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];
    nextPlayer();
  } else if (dice !== 1){
      // Add score
      roundScore += dice;
      document.querySelector('#current-' + activePlayer).textContent = roundScore;
    } else {
      // Next player
      nextPlayer();
    }

    lastDice = dice;
    }

});


document.querySelector('.btn-hold').addEventListener('click', function (){

  if(gamePlaying){

  // Add CURRENT score to GLOBAL score
  scores[activePlayer] += roundScore;

  // Update the UI
  document.querySelector('#score-' + activePlayer).textContent = scores[activePlayer];

  var input = document.querySelector('.final-score').value;
  var winningScore;

  // Undefined, 0, null or '' are COERCED to false
  // Anything else COERCED to true
  if (input){
    winningScore = input;
  } else {
    winningScore = 20;
  }

  // Check if player won the game
  if (scores[activePlayer] >= winningScore) {
    document.querySelector('#name-' + activePlayer).textContent = 'Winner!';
    document.querySelector('.dice').style.display = 'none';
    document.querySelector('.player-' + activePlayer + '-panel').classList.add('winner');
    document.querySelector('.player-' + activePlayer + '-panel').classList.remove('active');
    gamePlaying = false;
  } else {
    // Next player
    nextPlayer();
  }
  }
});


function nextPlayer(){
  // Next player
  activePlayer === 0 ? activePlayer = 1 : activePlayer = 0;
  roundScore = 0;
  

  document.querySelector('#current-0').textContent = '0';
  document.querySelector('#current-1').textContent = '0';

  document.querySelector('.player-0-panel').classList.toggle('active')
  document.querySelector('.player-1-panel').classList.toggle('active')

  document.querySelector('.dice').style.display = 'none';
};

document.querySelector('.btn-new').addEventListener('click', init);

function init(){

  scores = [0, 0];
  roundScore = 0;
  activePlayer = 0;
  gamePlaying = true;

  document.querySelector('.dice').style.display = 'none';

  document.getElementById('score-0').textContent = '0';
  document.getElementById('score-1').textContent = '0';
  document.getElementById('current-0').textContent = '0';
  document.getElementById('current-1').textContent = '0';

  document.querySelector('#name-0').textContent = 'Player 1';
  document.querySelector('#name-1').textContent = 'Player 2';

  document.querySelector('.player-0-panel').classList.remove('winner');
  document.querySelector('.player-1-panel').classList.remove('winner');
  document.querySelector('.player-0-panel').classList.remove('active');
  document.querySelector('.player-1-panel').classList.remove('active');
  document.querySelector('.player-0-panel').classList.add('active');

};