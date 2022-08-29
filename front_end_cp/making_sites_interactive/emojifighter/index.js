let fighters = [
  '🐉',
  '🐥',
  '🐊',
  '💩',
  '🦍',
  '🐢',
  '🐩',
  '🦭',
  '🦀',
  '🐝',
  '🤖',
  '🐘',
  '🐸',
  '🕷',
  '🐆',
  '🦕',
  '🦁',
];

let stageEl = document.getElementById('stage');
let fightButton = document.getElementById('fightButton');

function randNum() {
  return Math.floor(Math.random() * 16 + 1);
}
console.log(randNum());

fightButton.addEventListener('click', function () {
  stageEl.textContent = `${fighters[randNum()]} VS ${fighters[randNum()]}`;
});
