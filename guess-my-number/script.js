'use strict';

let secretNumber = Math.floor(Math.random() * 20 + 1);
let score = 20;
let highScore = 0;

document.querySelector('.check').addEventListener('click', () => {
  const guess = +document.querySelector('.guess').value;
  if (!guess) {
    document.querySelector('.message').textContent = '⛔ Not a valid Number!';
  } else if (guess === secretNumber) {
    document.querySelector('.number').textContent = secretNumber;
    document.querySelector('.message').textContent = '🎊 Correct Number!';
    score++;
    document.querySelector('.score').textContent = score;
    document.querySelector('.number').style.width = '30rem';
    document.body.style.backgroundColor = 'green';
    if (highScore < score) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
    document.querySelector('.check').disabled = true;
  } else if (guess !== secretNumber) {
    document.querySelector('.number').style.width = '15rem';
    document.body.style.backgroundColor = '#222';
    if (score > 1) {
      document.querySelector('.message').textContent =
        guess > secretNumber ? '📈 Too High' : '📉 Too Low';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      document.querySelector('.message').textContent = '💥 You Lost';
      document.querySelector('.score').textContent = 0;
    }
  }
});

document.querySelector('.again').addEventListener('click', () => {
  score = 20;
  secretNumber = Math.floor(Math.random() * 20 + 1);

  document.querySelector('.number').textContent = '?';
  document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.score').textContent = score;
  document.querySelector('.guess').value = '';
  document.querySelector('.check').disabled = false;

  document.querySelector('.number').style.width = '15rem';
  document.body.style.backgroundColor = '#222';
});
