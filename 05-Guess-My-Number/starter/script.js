'use strict';

let secretNumber = Math.trunc(Math.random() * 20) + 1;

let score = 20;
let highscore = 0;

document.querySelector('.again').addEventListener('click', function () {
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  score = 20;

  document.querySelector('.message').textContent = 'Start guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.number').textContent = '?';
  document.querySelector('.guess').value = '';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);

  if (!guess) {
    document.querySelector('.message').textContent = '❌ No Number';

    //When players win
  } else if (guess === secretNumber) {
    document.querySelector('.message').textContent = '🎉 Coorect Number!';
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }

    //When guess number is too high
  } else if (guess > secretNumber) {
    if (guess - secretNumber >= 10) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 Too Hihg';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '💥 You Lost The Game!';
        document.querySelector('.score').textContent = 0;
      }

      //When guess number is high
    } else if (guess - secretNumber < 10) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📈 High';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '💥 You Lost The Game!';
        document.querySelector('.score').textContent = 0;
      }
    }
  } else if (guess < secretNumber) {
    if (secretNumber - guess >= 10) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📉 Too Low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '💥 You Lost The Game!';
        document.querySelector('.score').textContent = 0;
      }
    } else if (secretNumber - guess < 10) {
      if (score > 1) {
        document.querySelector('.message').textContent = '📉 Low';
        score--;
        document.querySelector('.score').textContent = score;
      } else {
        document.querySelector('.message').textContent =
          '💥 You Lost The Game!';
        document.querySelector('.score').textContent = 0;
      }
    }
  }
});
