'use strict';

function calcAge(birthYear) {
  // const and let are block scoped
  const age = 2023 - birthYear;

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}.`;
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      // global variable is available in all scopes
      const str = `Oh, and you are a millenial, ${firstName}`;
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      output = 'NEW OUTPUT';
    }

    // functions are block scoped in strict mode
    // console.log(add(2, 4));

    // var is function scoped
    console.log(millenial);

    // global variable reassigned
    console.log(output);
  }

  printAge();
  return age;
}

const firstName = 'Chandrakant';
calcAge(1996);

const myName = 'Chandrakant';
if (myName === 'Chandrakant') {
  // ReferenceError: cannot access 'job' before initialization
  //   console.log(`${myName} is a ${job}`);

  const age = 2023 - 1996;
  console.log(age);

  const job = 'Engineer';

  // ReferenceError: x is not defined
  //   console.log(x);
}

// console.log(me);
// console.log(job);
// console.log(year);
// var me = 'Chandrakant';
// let job = 'Engineer';
// const year = 1996;

// console.log(addDecr(3, 4));
// console.log(addExpr(3, 4));
// console.log(addArr(3, 4));
// function addDecr(a, b) {
//   return a + b;
// }
// const addExpr = function (a, b) {
//   return a + b;
// };
// var addArr = (a, b) => a + b;

// Pitfall of hoisting
// if (!numProducts) deleteShoppingCart();
// var numProducts = 10;
// function deleteShoppingCart() {
//   console.log('All products deleted.');
// }

// this keyword
console.log(this);

function calcDecr(a, b) {
  console.log(this);
}
calcDecr();

const calcExpr = function (a, b) {
  console.log(this);
};
calcExpr();

var calcArr = (a, b) => console.log(this);
calcArr();

const Chandrakant = {
  year: 1996,
  calcAge: function () {
    console.log(this);
  },
};
Chandrakant.calcAge();

const Shraddha = {
  year: 1998,
};
// method borrowing
Shraddha.calcAge = Chandrakant.calcAge;
Shraddha.calcAge();

// function as values
const fun = Chandrakant.calcAge;
fun();

// arrow function vs regular function
const chandrakant = {
  firstName: 'Chandrakant',
  year: 1996,

  calcAge: function () {
    console.log(2023 - this.year);
    console.log(this);

    const isMillenial = () => {
      console.log(this.year <= 1996 && this.year >= 1981 ? true : false);
    };
    isMillenial();
  },
  greet: () => console.log(`Hey ${this.firstName}`),
};
chandrakant.greet();
chandrakant.calcAge();
const funExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
funExpr(2, 4);
