'use strict';

const generateSecretNumber = function () {
  let randomNumber = Math.trunc(Math.random() * 20) + 1;
  return randomNumber;
};

const displayMessage = function (message) {
  document.querySelector('.message').textContent = message;
};

const resetGame = function () {
  score = 20;
  secretNumber = generateSecretNumber();
  displayMessage('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('.number').style.width = '15rem';
  document.querySelector('body').style.backgroundColor = '#222';
};

const winnerScreen = function () {
  document.querySelector('.number').textContent = secretNumber;
  document.querySelector('body').style.backgroundColor = '#60b347';
};

let secretNumber = generateSecretNumber();
let score = 20;
let highscore = 0;

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    // when there is no input
    // document.querySelector('.message').textContent = '⛔ No Number!';
    displayMessage('⛔ No Number!');
  } else if (guess === secretNumber) {
    // when player wins
    displayMessage('🎉 Correct Number!');
    winnerScreen();

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    // when guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      displayMessage(guess > secretNumber ? '📈 Too high!' : '📉 Too low!'); // when player guesses higher than the secret number
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('❌ You lost the game');
      document.querySelector('.score').textContent = 0;
    }
  }
});

// Coding Challenge 1
// for when the user wants to restart the game again

document.querySelector('.again').addEventListener('click', function () {
  resetGame();
});
