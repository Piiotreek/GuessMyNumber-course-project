'use strict';

/*
console.log(document.querySelector('.message').textContent);

document.querySelector('.message').textContent = '🎉🎉Correct Number!';

console.log(document.querySelector('.message').textContent);

document.querySelector('.number').textContent = 13;
document.querySelector('.score').textContent = 10;

document.querySelector('.guess').value=23;
console.log(document.querySelector('.guess').value);
*/

let secretNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highscore = 0;
//AGAIN BUTTON
document.querySelector('.again').addEventListener('click', function () {
  //SCORE

  score = 20;
  document.querySelector('.score').textContent = score;
  //MESSAGE
  // document.querySelector('.message').textContent = 'Start guessing...';
  displayMessage('Start guessing...');
  //NUMBER
  secretNumber = Math.trunc(Math.random() * 20) + 1;
  // document.querySelector('.number').textContent =Math.trunc(Math.random() * 20) + 1;
  document.querySelector('.number').textContent = '?';
  //INTPUT
  document.querySelector('.guess').value = '';
  //BODY
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
});

const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

//CHECK BUTTON
document.querySelector('.check').addEventListener('click', function () {
  const guess = Number(document.querySelector('.guess').value);
  

  //When no input
  if (!guess) {
    // document.querySelector('.message').textContent = '⛔No number!';
    displayMessage('⛔No number!');

    //when player wins
  } else if (guess === secretNumber) {
    // document.querySelector('.message').textContent = '🎉🎉Correct Number!';
    displayMessage('🎉🎉Correct Number!');

    document.querySelector('.number').textContent = secretNumber;

    document.querySelector('body').style.backgroundColor = '#60b347';

    document.querySelector('.number').style.width = '30rem';

    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
    //When guess is wrong
  } else if (guess !== secretNumber) {
    if (score > 1) {
      // document.querySelector('.message').textContent =
      //   guess > secretNumber ? '📈Too High!' : '📉Too Low!';
        displayMessage(guess > secretNumber ? '📈Too High!' : '📉Too Low!');
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      // document.querySelector('.message').textContent = 'You lost the Game :(';
      displayMessage('You lost the Game :(');
      document.querySelector('.score').textContent = 0;
    }
  }
  //   //when guess is too high
  // else if(guess > secretNumber){
  //   if(score>1){document.querySelector('.message').textContent = '📈Too High!';
  //   score --;
  //   document.querySelector('.score').textContent = score;}else{
  //       document.querySelector('.message').textContent = 'You lost the Game :(';
  //       document.querySelector('.score').textContent = 0;
  //   }

  //   //when guess is too low
  // }else if(guess < secretNumber){
  //   if(score>1){document.querySelector('.message').textContent = '📉Too Low!';
  //   score --;
  //   document.querySelector('.score').textContent = score;}else{
  //       document.querySelector('.message').textContent = 'You lost the Game :(';
  //       document.querySelector('.score').textContent = 0;
  //   }
  // }
});
