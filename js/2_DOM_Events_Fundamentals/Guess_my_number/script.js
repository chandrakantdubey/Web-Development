'use strict';
// DOM and DOM manipulation(methods and properties are part of web API's(libraries))
// Document Object Model: structured representation of html documents.
// it allows js to access the html elements and styles to manipulate them.
// Document sits at the top and is a special object -> entry point to DOM
// Document > HTML > head & body > they have elements
// relationships are: parent, child, sibling
// every element is called node element

// console.log(document.querySelector('.message').textContent.toUpperCase());
// document.querySelector('.message').textContent = 'OOOhhhh lala 😊';
// document.querySelector('.number').textContent = 13;
// document.querySelector('.score').textContent = 20;
// document.querySelector('.guess').value = 23;
// console.log(document.querySelector('.guess').value);


// Start of the game
// refactoring the code
const displayMessage = function(message){
  document.querySelector('.message').textContent = message;
}

let secretNumber = Math.floor(Math.random() * 20);
let score = 20;
let highscore = 0;
// console.log(secretNumber);
// event listener(type of event, function(event handler))
document.querySelector('.check').addEventListener('click', () => {
  const guess = document.querySelector('.guess').value;
  console.log(guess);

  if (!guess) {
    displayMessage('OOOhhhh no number 😊');
    // document.querySelector('.message').textContent = 'OOOhhhh no number 😊';
  } else if (guess == secretNumber) {
    // console.log(secretNumber);
    document.querySelector('.number').textContent = secretNumber;
    displayMessage('Correct number');
    // document.querySelector('.message').textContent = 'Correct number';
    score++;
    document.querySelector('.score').textContent = score;
    // style manipulating
    document.querySelector('body').style.backgroundColor = 'Green';
    document.querySelector('.number').style.width = '30rem';
    if (score > highscore) {
      highscore = score;
      document.querySelector('.highscore').textContent = highscore;
    }
  } else if (guess !== secretNumber) {
    console.log(secretNumber);
    if (score > 1) {
      displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!');
      // document.querySelector('.message').textContent = guess > secretNumber ? 'Too High!' : 'Too Low!';
      score--;
      document.querySelector('.score').textContent = score;
    } else {
      displayMessage('You lost the game!');
      // document.querySelector('.message').textContent = 'You lost the game!';
      document.querySelector('.score').textContent = 0;
    }
  }

  // else if (guess > secretNumber) {
  //   if(score>1){
  //     document.querySelector('.message').textContent = 'Tooo High';
  //     score--;
  //     document.querySelector('.score').textContent = score;
  //   } else {
  //     document.querySelector('.message').textContent = "You lost the game!";
  //     document.querySelector('.score').textContent = 0;
  //   }
  // } else if (guess < secretNumber) {
  //   document.querySelector('.message').textContent = 'Tooo Low';
  //   score--;
  //   document.querySelector('.score').textContent = score;
  // } else document.querySelector('.message').textContent = 'Guess a number';
});

document.querySelector('.again').addEventListener('click', () => {
  secretNumber = Math.floor(Math.random() * 20);
  displayMessage('Start Guessing...');
  // document.querySelector('.message').textContent = 'Start Guessing...';
  document.querySelector('.guess').value = '';
  document.querySelector('.score').textContent = 20;
  document.querySelector('.number').textContent = '?';
  document.querySelector('body').style.backgroundColor = '#222';
  document.querySelector('.number').style.width = '15rem';
  // console.log(secretNumber);
});
