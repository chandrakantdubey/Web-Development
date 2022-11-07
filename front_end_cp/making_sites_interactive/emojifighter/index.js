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

const button = document.createElement('button');
let root = document.querySelector('.root');
root.append(button);
let count = 0;
button.textContent = `Count : `;
button.addEventListener('click', () => {
  count++;
  button.textContent = `Count : ${count}`;
});

function Hello() {
  return <h2>Increase Count on match.</h2>;
}
ReactDOM.render(<Hello />, document.querySelector('.root1'));