'use strict';
// var firstName = "Chandrakant";
// using var creates a property and hence which is global hence 'Chandrakant' will be o/p
const Chandrakant = {
  firstName: 'Chandrakant',
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);
  },
  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
// we will get undefined as arrow function does not get its own this.
// Chandrakant.greet();
// this shows that use of arrow function as methods creates bugs.

const ChandrakantD = {
  firstName: 'Chandrakant',
  year: 1996,
  calcAge: function () {
    console.log(this);
    console.log(2022 - this.year);

    // const isMillenial = function () {
    //   console.log(this);
    //   console.log(this.year >= 1981 && this.year <= 1996);
    // };
    // isMillenial();
    // this will be undefined as the regular function this is undefined in strict mode

    // solution to above problem
    const isMillenial = () => {
      console.log(this);
      console.log(this.year >= 1981 && this.year <= 1996);
    };
    isMillenial();
  },

  greet: () => {
    console.log(this);
    console.log(`Hey ${this.firstName}`);
  },
};
// ChandrakantD.greet();
// ChandrakantD.calcAge();

// arguments keyword only available in regular functions
const addExpr = function (a, b) {
  console.log(arguments);
  return a + b;
};
addExpr(3, 4);
addExpr(2, 5, 8, 9);

var addArr = (a, b) => {
  console.log(arguments);
  return a + b;
};
// addArr(2, 5, 8);
// this gives an error
