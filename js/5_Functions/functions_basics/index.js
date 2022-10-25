'use strict';

//use of default parameters
const bookings = [];
const createBooking = function (flightNum, numPassengers=1, price=1) {
  //ES6 way of setting default parameters(can contain any value also values of preceeding parameters)

  //old way of setting default parameters: ES5
  // numPassengers = numPassengers || 1;
  // price = price || 199;

  const booking = {
    //using ES6 object syntax
    flightNum,
    numPassengers,
    price,
  };
  console.log(booking);
  bookings.push(booking);
};

createBooking('LH123');
createBooking('LH456',34,3000);
createBooking('LH456',undefined,3000);
// to skip a parameter just pass undefined in its place.

// passing arguments as value : primitives & as reference: Object
const flight = 'LH464';
const Chandrakant = {
  name: "Chandrakant Dubey",
  passport: 46466464,
}
const checkIn = function(flightNum, passenger){
  flightNum = 'LH999',
  passenger.name = `Mr ${passenger.name}`;

  if(passenger.passport === 46466464) alert('Checked In')
  else alert('Wrong Password')
}
// checkIn(flight, Chandrakant)
// console.log(flight); 
//primitives are passed as value
// console.log(Chandrakant);
//object is passed as reference hence it value changes
const newPassport = function(person){
  person.passport = Math.trunc(Math.random()*100000000);
}
// newPassport(Chandrakant)
// checkIn(flight,Chandrakant)
//here we are manipulating the same object we are getting issue.
//In JS a parameter is passed as value not reference though objects are manipulated it is still a value.

/*Pass By Reference
In pass by reference, a function may be called by directly passing the reference/address of the variable as an argument. If you change the argument inside the function, it will affect the variable passed from outside the function.*/

//JS treats functions as first-class-citizens
//Which means functions are simply values
//Functions are just another "type" of object
//Store functions in variables or object properties
//Pass functions as arguments to other functions(eg. eventListener)
//Return functions from function
//Call methods on functions(as it is object)

//Higher Order functions => possible due to first-class functions
// A function that recieves another function as an argument/ that returns a new function or both.
//recieve HOF: addEventListener('click',greet);
// a function that is passed in as parameter is callback function: as it will be called later
//return HOF: function count(){let counter = 0; return function(){counter++}}

//Accepting callback function
// Callback uses:
//Create a clean code
//Allow to create abstraction: hide implementation of code details
const oneWord = function(str){
  return str.replace(/ /g, ' ').toLowerCase();
}
const upperFirstWord = function(str){
  const [first, ...others] = str.split(' ')
  return [first.toUpperCase(), ...others].join(' ');
};
//Higher Order
const tranformer = function(str,fn){
  console.log(`Transformed string: ${str}`);
  console.log(`Transformed string: ${fn(str)}`);
  console.log(`Transformed by: ${fn.name}`);
  //here we are calling method on function
}
tranformer('Javascript is the best.',upperFirstWord)
//here we are passing function as value
tranformer('Javascript is the best.',oneWord);

//Return a function
const greet = function(greeting){
  return function(name){
    console.log(`${greeting} ${name}`);
  }
}
const greeterHey = greet('Hey');
//this returns a function
greeterHey("Chandrakant")
//this works because of closures.
//doing above two in one go
greet("Hello")("Dubey")


//call and apply methods
const lufthansa = {
  airline: "Lufthansa",
  iataCode: 'LH',
  bookings: [],
  book(flightNum, name){
    console.log(
      `${name} booked a seat on ${this.airline} flight ${this.iataCode}${flightNum}`
    );
    this.bookings.push({ flight: `${this.iataCode}${flightNum}`, name });
  }
}
lufthansa.book(239,"Chandrakant Dubey");
lufthansa.book(635,"Abhay Dubey");
console.log(lufthansa);

//storing method in a variable to reuse
const book = lufthansa.book;
// book(23,'Suresh Dubey')
//Cannot read properties of undefined (reading 'airline')
//This error occurs because we are making a regular function call
//In regular function call "this" keyword points to undefined.
//To tell JS what "this" to look for we use call(), apply() method

//call method
const eurowings = {
  airline: 'Eurowings',
  iataCode: 'EW',
  bookings: [],
};
book.call(eurowings, 23, "Suresh Dubey") 
console.log(eurowings);
book.call(lufthansa, 23, "Suresh Dubey") 
console.log(lufthansa);
// first argument points to object we can to have "this"

const swiss = {
  airline: 'Swiss Air Lines',
  iataCode: 'LX',
  bookings: [],
};
//Apply method: takes array of arguments.
const flightData = [583,'Priya Dubey'];
book.apply(swiss,flightData)
console.log(swiss)

//bind method: returns a new function where this keyword is bound
const bookEW = book.bind(eurowings)
bookEW(23, "Sunita Dubey");
console.log(eurowings);
const bookEW23 = book.bind(eurowings,23)
bookEW23("Chandrakant S Dubey")
bookEW23("Abhay S Dubey")
//Partial Application: part of the arguments already set

//bind with Event Listeners
lufthansa.planes = 300;
lufthansa.buyPlane = function(){
  console.log(this);
  this.planes++
  console.log(this.planes);
}
// document.querySelector('.buy').addEventListener('click',lufthansa.buyPlane)
//inside eventhandler function this points to the element it is attached too
document.querySelector('.buy').addEventListener('click', lufthansa.buyPlane.bind(lufthansa));

// Partial applicaton
const addTax = (rate,value) => value + value*rate;
console.log(addTax(0.1,200));
const addVAT = addTax.bind(null, 0.23);
// here we are presettting the rate argument
console.log(addVAT(100));
console.log(addVAT(23));
//using return to do bind functionality
const addTaxRate = function(rate){
  return function(value){
    return value + value * rate;
  }
}
const addVAT2 = addTaxRate(0.23);
console.log(addVAT2(100));
console.log(addVAT2(23));

//Assignment
const poll = {
 question: "What is your favourite programming language?",
 options: ["0: JavaScript", "1: Python", "2: Rust", "3: C++"],
 answers: new Array(4).fill(0),

  registerNewAnswer(){
    let answer = Number(prompt(
      `${this.question} \n${this.options.join('\n')}\n(Write option number)`));

    typeof answer === 'number' && answer < this.answers.length && this.answers[answer]++;

    this.displayResult();
    this.displayResult('string')
  },

  displayResult(type = 'array'){
    if(type === 'array'){
      console.log(this.answers);
    } else if(type === 'string'){
      console.log(`Poll results are ${this.answers.join(', ')}`);
    }
  },
};

poll.displayResult.call({answers: [5,2,3]},'string')
poll.displayResult.call({answers: [1,5,3,9,6,1]},'string')

document
  .querySelector('.poll')
  .addEventListener('click', poll.registerNewAnswer.bind(poll));


// Immediately Invoked Function Expression(IIFE) =>(function(){})()
// all data inside a scope is private: encapsulated.
(function(){console.log('This will never run again');})();
(()=>console.log('This will also never run again'))();


//Closures: 
const secureBooking = function(){
  let passengerCount = 0;
  return function (){
    passengerCount++;
    console.log(`${passengerCount} passengers`);
  }
}

const booker = secureBooking();
booker();