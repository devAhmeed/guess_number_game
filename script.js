'use strict';
let secertNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = 0;
const msg = message =>
  (document.querySelector('.message').textContent = message);
// document.querySelector('.number').textContent = secertNumber;

document.querySelector('.check').addEventListener('click', function () {
  const x = Number(document.querySelector('.guess').value);
  if (!x) {
    msg('Please Enter A Number First  😉');
  } else if (x > 20) {
    msg('I Told You To Pick From 1 - 20 , Only 1 - 20 😁');
  } else if (x > secertNumber) {
    if (score > 1) {
      msg('A Bit High , Try again 👌');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      msg('Ohhh , Sorry You Lost 😓');
      document.querySelector('.score').textContent = 0;
    }
  } else if (x < secertNumber) {
    if (score > 1) {
      msg('A Bit Low , Try again 👌');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      msg('Ohhh , Sorry You Lost 😓');
      document.querySelector('.score').textContent = 0;
    }
  } else if (x === secertNumber) {
    document.querySelector(
      '.message'
    ).textContent = `👏 Well Play , It's a Correct Answer !`;
    document.querySelector('.number').textContent = secertNumber;
    document.querySelector('body').style.backgroundColor = '#60b347';
    document.querySelector('.number').style.width = '30rem';
    if (score > highScore) {
      highScore = score;
      document.querySelector('.highscore').textContent = highScore;
    }
  }
});

document.querySelector('.again').addEventListener('click', function () {
  const score = 20;
  secertNumber = Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.guess').value = '';
  document.querySelector('.number').textContent = '?';
  msg('Start guessing...');
  document.querySelector('.score').textContent = score;
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});
