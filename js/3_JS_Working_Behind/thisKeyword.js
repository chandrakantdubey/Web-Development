"use strict";
// The value of the this keyword depends on how the functions is called.
// Value assigned when the function is actually called
// calling function : 4 ways

// 1. Method invoked on an object this points to the object calling the method.
const chandrakant = {
  name: "Chandrakant",
  birthYear: 1996,
  calcAge: function () {
    return 2022 - this.birthYear;
  },
};
console.log(chandrakant.calcAge());

// here this refers to the Chandrakant object only because of that we are able to access the birthYear
// above equivalent can be written as chandrakant.birthYear

// 2. simple function call this points to undefined in strict mode
const calcage = function (birthYear) {
  console.log(2022 - birthYear);
  // in normal mode it points to window object/global object
  console.log(this);
};
calcage(1996);

// 3. arrow function: do not get this keyword. this of surrounding function(lexical this)
const calcageArr = (birthYear) => {
  console.log(2022 - birthYear);
  //   here this is using the this of the parent scope
  console.log(this);
};
calcageArr(1996);

// event listener: always points to the DOM element that the handler is attached.

// this does not point to function itself and also not to the variable environment

const dubey = {
  birthYear: 2017,
};
dubey.calcAge = chandrakant.calcAge;
// this is called method borrowing
console.log(dubey.calcAge());
// this shows that this keyword depends on how function is called and is dynamic
// points to the object that called the method.

const f = chandrakant.calcAge;
console.log(f()); // this gives undefined as it is not attached an object.
