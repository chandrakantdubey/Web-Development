let guestScore = document.querySelector('.guestscore');
let homeScore = document.querySelector('.homescore');
let home1 = document.querySelector('.home1');
let home2 = document.querySelector('.home2');
let home3 = document.querySelector('.home3');
let guest1 = document.querySelector('.guest1');
let guest2 = document.querySelector('.guest2');
let guest3 = document.querySelector('.guest3');

home1.addEventListener('click', () => {
  let score = Number(homeScore.innerHTML) + 1;
  homeScore.textContent = score;
});
home2.addEventListener('click', () => {
  let score = Number(homeScore.innerHTML) + 2;
  homeScore.textContent = score;
});
home3.addEventListener('click', () => {
  let score = Number(homeScore.innerHTML) + 3;
  homeScore.textContent = score;
});
guest1.addEventListener('click', () => {
  let score = Number(guestScore.innerHTML) + 1;
  guestScore.textContent = score;
});
guest2.addEventListener('click', () => {
  let score = Number(guestScore.innerHTML) + 2;
  guestScore.textContent = score;
});
guest3.addEventListener('click', () => {
  let score = Number(guestScore.innerHTML) + 3;
  guestScore.textContent = score;
});
