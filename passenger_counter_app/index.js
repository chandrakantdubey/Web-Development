let count = document.querySelector('.count');
let incBtn = document.querySelector('.increment');
let saveBtn = document.querySelector('.save');
let logs = document.querySelector('.logs');

let cnt = count.textContent;

console.log(typeof cnt);

function increment() {
  count.textContent = Number(count.textContent) + 1;
}

function clearCount() {
  count.textContent = 0;
}

function saveLog() {
  if (Number(count.textContent)) {
    logs.textContent += ' ' + count.textContent;
    clearCount();
  }
}

incBtn.addEventListener('click', increment);
saveBtn.addEventListener('click', saveLog);
