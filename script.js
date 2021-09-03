'use strict';
const number = document.querySelector('.number');
const input = document.querySelector('.guess');
const check = document.querySelector('.check');
const again = document.querySelector('.again');
const title = document.querySelector('.title');
const message = document.querySelector('.message');
const score = document.querySelector('.score');
const highScore = document.querySelector('.highscore');
const body = document.querySelector('body');

let random = Math.trunc(Math.random() * 20) + 1;

let currentScore = 20;

const even = function () {
  if (Number(input.value) > random) {
    message.textContent = 'Too high...';
    currentScore--;
    score.textContent = currentScore;
    input.value = '';
  } else if (Number(input.value) < random) {
    message.textContent = 'Too low...';
    currentScore--;
    score.textContent = currentScore;
    input.value = '';
  } else if (Number(input.value) === random) {
    message.textContent = 'You win...';
    body.style.backgroundColor = 'blue';
    if (+highScore.textContent < currentScore)
      highScore.textContent = currentScore;
  }
};

check.addEventListener('click', function () {
  even();
});

document.addEventListener('keydown', function (e) {
  if (e.key === 'Enter') {
    even();
  }
});
again.addEventListener('click', function () {
  random = Math.trunc(Math.random() * 20) + 1;

  score.textContent = 20;
  currentScore = 20;
  input.value = '';
  body.style.backgroundColor = 'black';
});
