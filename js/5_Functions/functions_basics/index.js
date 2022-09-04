'use strict';

const bookings = [];

// default parameter: parameters set automatically
// setting the parameters using ES6 way
// we can write any expression also use other parameters defined before it

const createBooking = function (flightName, numPassengers = 1, price = 199) {
  // old way setting the parameters: ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;
  //   here we have used short circuiting

  const booking = {
    flightName,
    numPassengers,
    price,
    // this way of writing is enhanced way of creating properties.
  };
  console.log(booking);
  bookings.push('LH123');
};

// createBooking('LH123');
// createBooking('LH123', 2, 800);

// this way we can skip setting the parameter
// createBooking('LH123', undefined, 1000);

// pass by value vs pass by reference
// js has only pass by value
const flight = 'LH123';
const chandrakant = {
  name: 'Chandrakant Dubey',
  passport: 132453522,
};

const checkIn = function (flightNum, passenger) {
  flightNum = 'LH999';
  passenger.name = `Mr. ${passenger.name}`;

  if (passenger.passport === 132453522) {
    alert('Checked In');
  } else {
    alert('Wrong passport');
  }
};

// checkIn(flight, chandrakant);
console.log(flight);
// flight number(primitive) did not change as it is value: passing it just creates a copy
console.log(chandrakant);
// object did change to new value: because the object remains the same an gets modified

const newPassport = function (person) {
  person.passport = Math.trunc(Math.random() * 100000000);
};
newPassport(chandrakant);
// checkIn(flight, chandrakant);
// we are manipulating the same object again here
// hence we get wrong passport.

// first class and higher order functions

// first class function: functions are treated as values, they are another type of object.
// hence we can store them in variable
// pass as arguments: addEventListener
// return a function from another function
// since it is just object we can call methods on functions

// higher order function: either recieves a function or returns a functions or both.
// eg addEventListener: it recieves a function(callback function)

// creating higher order functions
const oneWord = function (str) {
  return str.replace(/ /g, ' ').toLowerCase();
};
const upperFirstWord = function (str) {
  const [first, ...others] = str.split(' ');
  return [first.toUpperCase(), ...others].join(' ');
};
// Higher order function
const tranformer = function (str, fn) {
  console.log(`Original: ${str}`);
  console.log(`Transformed: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
};
// observe: we passed function as value not called it because the transformer will call it.
tranformer('JS is the best!', upperFirstWord);
tranformer('JS is the best!', oneWord);

// callback examples
const high5 = function () {
  console.log('🌄');
};
document.body.addEventListener('click', high5);
// callback: the make it easy to split the code and reusable
// allows to create abstraction we hide the details of the code implementation

// function return other function
const greet = function (greeting) {
  return function (name) {
    console.log(`${greeting} ${name}`);
  };
};
const greetHey = greet('hey');
// here the function is stored in the greetHey
greetHey('Chandrakant');
greetHey('Dubey');
// the reason this worked is part of closures

// immediately calling the function
greet('Hello')('Chandrakant');

// writing the above function as arrow function
const Greet = (Greeting) => {
  return (Name) => {
    console.log(`${Greeting} ${Name}`);
  };
};
Greet('Hello')('Chandrakant');

//
const lufthansa = {
  airline: 'Lufthansa',
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name) {
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode} ${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  },
};

lufthansa.book(239, 'Chandrakant');
lufthansa.book(569, 'Dubey');
console.log(lufthansa);

const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};

const book = lufthansa.book;

// book(23, 'Priya');
// does not work

book.call(eurowings, 23, 'Priya');
