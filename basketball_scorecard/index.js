let guestScore = document.querySelector(".guestscore");
let homeScore = document.querySelector(".homescore");
let home1 = document.querySelector(".home1");
let home2 = document.querySelector(".home2");
let home3 = document.querySelector(".home3");
let guest1 = document.querySelector(".guest1");
let guest2 = document.querySelector(".guest2");
let guest3 = document.querySelector(".guest3");

function incrementScore(num, team) {
  let score = Number(team.innerHTML) + num;
  team.textContent = score;
}

home1.addEventListener("click", () => incrementScore(1, homeScore));
home2.addEventListener("click", () => incrementScore(2, homeScore));
home3.addEventListener("click", () => incrementScore(3, homeScore));
guest1.addEventListener("click", () => incrementScore(1, guestScore));
guest2.addEventListener("click", () => incrementScore(2, guestScore));
guest3.addEventListener("click", () => incrementScore(3, guestScore));

document.querySelector(".btn-reset").addEventListener("click", () => {
  guestScore.textContent = 0;
  homeScore.textContent = 0;
});

// home1.addEventListener("click", () => {
//   let score = Number(homeScore.innerHTML) + 1;
//   homeScore.textContent = score;
// });
// home2.addEventListener("click", () => {
//   let score = Number(homeScore.innerHTML) + 2;
//   homeScore.textContent = score;
// });
// home3.addEventListener("click", () => {
//   let score = Number(homeScore.innerHTML) + 3;
//   homeScore.textContent = score;
// });
// guest1.addEventListener("click", () => {
//   let score = Number(guestScore.innerHTML) + 1;
//   guestScore.textContent = score;
// });
// guest2.addEventListener("click", () => {
//   let score = Number(guestScore.innerHTML) + 2;
//   guestScore.textContent = score;
// });
// guest3.addEventListener("click", () => {
//   let score = Number(guestScore.innerHTML) + 3;
//   guestScore.textContent = score;
// });
