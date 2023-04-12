let fighters = [
  "🐉",
  "🐥",
  "🐊",
  "💩",
  "🦍",
  "🐢",
  "🐩",
  "🦭",
  "🦀",
  "🐝",
  "🤖",
  "🐘",
  "🐸",
  "🕷",
  "🐆",
  "🦕",
  "🦁",
];

const button = document.createElement("button");
let root = document.querySelector(".root");
root.append(button);
let count = 0;
button.textContent = `Score : ${count}`;

let stageEl = document.getElementById("stage");
let fightButton = document.getElementById("fightButton");

function randNum() {
  return Math.floor(Math.random() * 16 + 1);
}

fightButton.addEventListener("click", function () {
  let randNum1 = randNum();
  let randNum2 = randNum();
  stageEl.textContent = `${fighters[randNum1]} VS ${fighters[randNum2]}`;
  if (randNum1 === randNum2) {
    count++;
    button.textContent = `Count : ${count}`;
  }
});

function Hello() {
  return <h1>Score Increases on match</h1>;
}
ReactDOM.render(<Hello />, document.querySelector(".root1"));
