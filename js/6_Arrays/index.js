'use strict';

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// BANKIST APP

// Data
const account1 = {
  owner: 'Jonas Schmedtmann',
  movements: [200, 450, -400, 3000, -650, -130, 70, 1300],
  interestRate: 1.2, // %
  pin: 1111,
  movementsDate: [],
};

const account2 = {
  owner: 'Jessica Davis',
  movements: [5000, 3400, -150, -790, -3210, -1000, 8500, -30],
  interestRate: 1.5,
  pin: 2222,
  movementsDate: [],
};

const account3 = {
  owner: 'Steven Thomas Williams',
  movements: [200, -200, 340, -300, -20, 50, 400, -460],
  interestRate: 0.7,
  pin: 3333,
  movementsDate: [],
};

const account4 = {
  owner: 'Sarah Smith',
  movements: [430, 1000, 700, 50, 90],
  interestRate: 1,
  pin: 4444,
  movementsDate: [],
};

const accounts = [account1, account2, account3, account4];

// Elements
const labelWelcome = document.querySelector('.welcome');
const labelDate = document.querySelector('.date');
const labelBalance = document.querySelector('.balance__value');
const labelSumIn = document.querySelector('.summary__value--in');
const labelSumOut = document.querySelector('.summary__value--out');
const labelSumInterest = document.querySelector('.summary__value--interest');
const labelTimer = document.querySelector('.timer');

const containerApp = document.querySelector('.app');
const containerMovements = document.querySelector('.movements');

const btnLogin = document.querySelector('.login__btn');
const btnTransfer = document.querySelector('.form__btn--transfer');
const btnLoan = document.querySelector('.form__btn--loan');
const btnClose = document.querySelector('.form__btn--close');
const btnSort = document.querySelector('.btn--sort');

let inputLoginUsername = document.querySelector('.login__input--user');
const inputLoginPin = document.querySelector('.login__input--pin');
const inputTransferTo = document.querySelector('.form__input--to');
const inputTransferAmount = document.querySelector('.form__input--amount');
const inputLoanAmount = document.querySelector('.form__input--loan-amount');
const inputCloseUsername = document.querySelector('.form__input--user');
const inputClosePin = document.querySelector('.form__input--pin');

//starting to code from here

const dateFormat = (date) => {
  const year = date.getFullYear();
  const month = date.getMonth() + 1;
  const day = date.getDate();
  return `${day}/${month}/${year}`;
};

console.log(dateFormat(new Date()));

const displayMovements = function (movements, sort = false) {
  containerMovements.innerHTML = '';

  const movs = sort ? movements.slice().sort((a, b) => a - b) : movements;

  movs.forEach((mov, ind) => {
    const type = mov > 0 ? 'deposit' : 'withdrawal';
    const html = `
    <div class="movements__row">
      <div class="movements__type movements__type--${type}">${ind + 1} ${type}
    </div>
    <div class="movements__date">${new Date().toLocaleDateString()}</div>
        <div class="movements__value">${mov.toFixed(2)}€</div>
    </div>
    `;
    containerMovements.insertAdjacentHTML('afterbegin', html);
  });
};

const calcDisplayBalance = function (acc) {
  acc.balance = acc.movements.reduce((acc, mov) => acc + mov, 0);
  labelBalance.textContent = `${acc.balance.toFixed(2)}€`;
};

const calcDisplaySummary = function (acc) {
  const incomes = acc.movements
    .filter((mov) => mov > 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumIn.textContent = `${incomes.toFixed(2)}€`;

  const out = acc.movements
    .filter((mov) => mov < 0)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumOut.textContent = `${Math.abs(out).toFixed(2)}€`;

  const interest = acc.movements
    .filter((mov) => mov > 0)
    .map((mov) => (mov * acc.interestRate) / 100)
    .reduce((acc, mov) => acc + mov, 0);
  labelSumInterest.textContent = `${interest.toFixed(2)}€`;
};

const createUsername = function (accs) {
  accs.forEach((acc) => {
    acc.username = acc.owner
      .toLowerCase()
      .split(' ')
      .map((item) => item[0])
      .join('');
  });
};
createUsername(accounts);
// console.log(accounts);

labelDate.textContent = dateFormat(new Date());

const updateUI = function (acc) {
  // display movements
  displayMovements(acc.movements);
  // balance
  calcDisplayBalance(acc);
  // summary
  calcDisplaySummary(acc);
};

const starLogOutTimer = function () {
  const tick = function () {
    const min = String(Math.trunc(timer / 60)).padStart(2, 0);
    const sec = String(Math.trunc(timer % 60)).padStart(2, 0);
    // in each call, print the remaining time to UI
    labelTimer.textContent = `${min}:${sec}`;

    // when 0 seconds, stop timer and log out user
    if (timer === 0) {
      clearInterval(time);
      labelWelcome.textContent = `Log in to get started`;
      containerApp.style.opacity = 0;
    }
    //decrease 1s
    timer--;
  };

  // set time to 5 minutes
  let timer = 10;
  // call the time every second
  tick();
  const time = setInterval(tick, 1000);

  return time;
};

//event handler
let currentAccount, time;

btnLogin.addEventListener('click', function (e) {
  e.preventDefault();
  currentAccount = accounts.find(
    (acc) => acc.username === inputLoginUsername.value
  );
  console.log(currentAccount);

  if (currentAccount?.pin === +inputLoginPin.value) {
    //displat UI and welcome message
    labelWelcome.textContent = `
    Welcome back ${currentAccount.owner.split(' ')[0]}
    `;
    containerApp.style.opacity = 100;

    //clear input fields
    inputLoginUsername.value = inputLoginPin.value = '';
    inputLoginPin.blur();

    if (time) clearInterval(time);

    time = starLogOutTimer();

    updateUI(currentAccount);
  }
});

btnTransfer.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = +inputTransferAmount.value;
  const receiverAcc = accounts.find(
    (acc) => acc.username === inputTransferTo.value
  );

  inputTransferAmount.value = inputTransferTo.value = '';

  if (
    amount > 0 &&
    receiverAcc &&
    currentAccount.balance >= amount &&
    receiverAcc?.username !== currentAccount.username
  ) {
    console.log('Transfer ready to start');
    currentAccount.movements.push(-amount);
    receiverAcc.movements.push(amount);
    updateUI(currentAccount);
  }

  currentAccount.movementsDate.push(dateFormat(new Date()));
  receiverAcc.movementsDate.push(dateFormat(new Date()));

  //reset timer

  clearInterval(time);
  time = starLogOutTimer();
});

btnLoan.addEventListener('click', (e) => {
  e.preventDefault();
  const amount = Math.floor(+inputLoanAmount.value);

  if (
    amount > 0 &&
    currentAccount.movements.some((mov) => mov >= amount * 0.1)
  ) {
    setTimeout(function () {
      currentAccount.movements.push(amount);
      currentAccount.movementsDate = dateFormat(new Date());
      updateUI(currentAccount);
      clearInterval(time);
      time = starLogOutTimer();
    }, 3000);
  }

  inputLoanAmount.value = '';
});

btnClose.addEventListener('click', (e) => {
  e.preventDefault();
  if (
    inputCloseUsername.value === currentAccount.username &&
    +inputClosePin.value === currentAccount.pin
  ) {
    const index = accounts.findIndex(
      (acc) => acc.username === currentAccount.username
    );
    // Delete account
    accounts.splice(index, 1);
    // Hide UI
    containerApp.style.opacity = 100;
  }
  inputTransferAmount.value = inputTransferTo.value = '';
});

let sorted = false;
btnSort.addEventListener('click', (e) => {
  e.preventDefault();
  displayMovements(currentAccount.movements, !sorted);
  sorted = !sorted;
});

/////////////////////////////////////////////////
/////////////////////////////////////////////////
// LECTURES

const currencies = new Map([
  ['USD', 'United States dollar'],
  ['EUR', 'Euro'],
  ['GBP', 'Pound sterling'],
]);

const movements = [200, 450, -400, 1, -2, 3000, -650, -130, 70, 1300];

/////////////////////////////////////////////////

const ingredients = ['olives', 'fenugreek'];
const pizzaTimer = setTimeout(
  (ing1, ing2) => console.log(`Here is your pizza! with ${ing1} & ${ing2}`),
  2000,
  ...ingredients
);
console.log('waiting...');
if (ingredients.includes('spinach')) clearTimeout(pizzaTimer);

setTimeout(function () {
  const now = new Date();
  console.log(`${now.getHours()}:${now.getMinutes()}:${now.getSeconds()}`);
}, 3000);



