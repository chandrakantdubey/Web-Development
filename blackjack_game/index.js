const startGame = document.querySelector('#start-btn');
const newCard = document.getElementById('new-btn');
let cardsEl = document.querySelector('.cards-el');
let sumEl = document.querySelector('.sum-el');
let messageEl = document.querySelector('.message-el');
let playerEl = document.querySelector('.player-el');

let player = {
  playername: prompt('Enter your name start the game.').toUpperCase(),
  score: 0,
};

console.log(player.playername);
playerEl.textContent = `${player.playername}: $${player.score}`;

let cards = [];
let sum = 0;
let isAlive = false;
let hasblackJack = false;
let message = '';

startGame.addEventListener('click', function () {
  cardsEl.textContent = '';
  sumEl.textContent = '';
  isAlive = true;
  hasblackJack = false;
  let firstCard = randNum();
  let secondCard = randNum();
  cards = [firstCard, secondCard];
  sum = firstCard + secondCard;
  renderGame();
});

newCard.addEventListener('click', function () {
  if (isAlive && !hasblackJack) {
    let card = randNum();
    sum += card;
    cards.push(card);
    cardsEl.textContent = '';
    sumEl.textContent = '';
    renderGame();
  }
});

function renderGame() {
  for (let i = 0; i < cards.length; i++) {
    cardsEl.textContent += cards[i] + ' ';
  }
  sumEl.textContent += sum;
  if (sum <= 20) {
    message = 'You want to draw new card?';
  } else if (sum === 21) {
    message = "You've got Blackjack!";
    hasblackJack = true;
    player.score += 100;
    playerEl.textContent = `${player.playername}: $${player.score}`;
  } else {
    message = 'You are out of the game!';
    isAlive = false;
  }
  messageEl.textContent = message;
}

function randNum() {
  let randomNum = Math.floor(Math.random() * 13 + 1);
  if (randomNum > 10) {
    return 10;
  } else if (randomNum === 11) {
    return 11;
  } else {
    return randomNum;
  }
}
