'use strict';
// constructor function name capital case
// arrow function does not work because it does not have its own this keyword.
// constructor function are used to create object always with the new keyword.
// what happens with use of new keyword.
// 1. A new empty {} object is created
// 2. Function is called and this = {} (new object)
// 3. {}(new obj) is linked to constructor's functions prototype property
// 4. function automatically returns {}
const Person = function (firstName, birthY) {
  // the property names does not need to be the same name as param
  // instance properties
  this.firstName = firstName;
  this.birthY = birthY;
  // instance method -- never create method inside a constructor function as each object will get it
  // this.calcAge = () => console.log(2022 - this.birthY);
};
const chandrakant = new Person('Chandrakant', '1996');
const abhay = new Person('Abhay', '2004');
console.log(chandrakant, abhay);
// checking if the object was created by constructor
console.log(chandrakant instanceof Person);

// Prototypes
// each and every function in js has a property called prototype including constructor function.
console.log(Person.prototype);
console.log(Person.__proto__);
console.log(Person.__proto__.__proto__);
console.log(Person.__proto__.__proto__.__proto__);
console.dir(Person.prototype.constructor);
// defining method on the prototype of the constructor.
Person.prototype.calcAge = function () {
  console.log(2022 - this.birthY);
};
// all the objects created using the constructor will inherit the method as Prototypal inheritance.
// useful to reduce repetition
chandrakant.calcAge();
// each object has a special property called __proto__
console.log(chandrakant);
console.log(chandrakant.__proto__);
console.log(chandrakant.__proto__.__proto__);
console.log(chandrakant.__proto__.__proto__.__proto__);
console.log(chandrakant.prototype);
console.log(chandrakant.__proto__ === Person.prototype);
console.log(Person.prototype.isPrototypeOf(chandrakant));
// function.prototype is prototype of all the objects created by function but not of the function itself.

// we can also set properties on the prototype
Person.prototype.species = 'Homo Sapiens';
console.log(chandrakant.species);

// array prototypes
const arr = [3, 4, 5, 6, 7, 8, 5, 6, 7, 8, 2, 3, 4, 2, 2, 2];
console.log(arr.__proto__);
console.log(arr.__proto__ === Array.prototype);
console.log(arr.__proto__.__proto__); // has props as object
// adding method on array
Array.prototype.unique = function () {
  return [...new Set(this)];
};
console.log(arr.unique());

// challenge
const Car = function (make, speed) {
  this.make = make;
  this.speed = speed;
};
Car.prototype.accelerate = function () {
  this.speed += 10;
  console.log(`The speed of the car is ${this.speed} km/hr.`);
};
Car.prototype.brake = function () {
  this.speed -= 5;
  console.log(`The speed of the car is ${this.speed} km/hr.`);
};
const BMW = new Car('BMW', 120);
const Mercedes = new Car('Mercedes', 95);
BMW.brake();
Mercedes.accelerate();
// ES6 Classess
// class expression ==> const PersonCl = class{   }
// class declaration
class PersonCl {
  constructor(firstName, birthYear) {
    this.firstName = firstName;
    this.birthYear = birthYear;
  }
  // the methods written outside the constructor in class are on the prototype and not on object.
  calcAge() {
    console.log(2022 - this.birthYear);
  }

  greet() {
    console.log(`Hey ${this.firstName}`);
  }
}
const Priya = new PersonCl('Priya', '1997');
console.log(Priya);
Priya.calcAge();
console.log(Priya.__proto__ === PersonCl.prototype);
// PersonCl.prototype.greet = function () {
//   console.log(`Hey ${this.firstName}`);
// };
Priya.greet();

// 1. Classes are not hoisted.
// 2. Classes are also first class citizens
// 3. Classes are always executed in strict mode

// getters & setters : every object can have them: accessor properties.
// Simple Object:
const account = {
  owner: 'Chandrakant',
  movements: [340, 450, 760],

  get latest() {
    return this.movements.pop();
  },

  set latest(mov) {
    this.movements.push(mov);
  },
};
// getter accessed as a property and not as function
console.log(account.latest);
// setter value set as a property and not as a function
account.latest = 600;
console.log(account.movements);

// Classes
class Personal {
  constructor(fullName, birthYear) {
    this.fullName = fullName;
    this.birthYear = birthYear;
  }
  get age() {
    return 2022 - this.birthYear;
  }

  // setting a property that already exists
  set fullName(name) {
    console.log(name);
    if (name.includes(' ')) this._fullName = name;
    else alert(`${name} is not full name.`);
  }
  get fullName() {
    return this._fullName;
  }

  static hey() {
    console.log('Hey there from class 👋');
  }
}
const Sunita = new Personal('Sunita Dubey', 44);
console.log(Sunita);
const Suresh = new Personal('Suresh Dubey', 46);

// static methods of classes
// these are not inherited by the objects prototype
Person.hey = function () {
  console.log('Hey there from constructor👋');
};
Person.hey();
Personal.hey();

// Object.create
const PersonProto = {
  calcAge() {
    console.log(2022 - this.birthYear);
  },
};
const shraddha = Object.create(PersonProto);
console.log(shraddha);
shraddha.name = 'Shraddha';
shraddha.birthYear = 1998;
shraddha.calcAge();

//challenge
class CarCl {
  constructor(make, speed) {
    this.make = make;
    this.speed = speed;
  }

  get speedUS() {
    return this.speed / 1.6;
  }

  set speedUS(s) {
    this.speed = s * 1.6;
  }
}

const Ford = new CarCl('Ford', 120);
console.log(Ford.speedUS);
Ford.speedUS = 100;
console.log(Ford.speed);

// Inheritance between classes
// 1. using constructor functions
const Student = function (firstName, birthY, course) {
  Person.call(this, firstName, birthY);
  this.course = course;
};
// Linking prototypes
Student.prototype = Object.create(Person.prototype);
Student.prototype.introduce = function () {
  console.log(`My name is ${this.firstName} and I study ${this.course}`);
};
const mike = new Student('Mike', 2000, 'CS');
console.log(mike);
mike.introduce();
// this works because of linked prototype
mike.calcAge();

// 2. using ES6 classes
class StudentCl extends PersonCl {
  constructor(firstName, birthYear, course) {
    super(firstName, birthYear);
    this.course = course;
  }

  introduce() {
    console.log(
      `Hi my name is ${this.firstName} and I am studying ${this.course}.`
    );
  }
}
const hazel = new StudentCl('Hazel', 2021, 'Walking');
hazel.introduce();

// 3. using Object.create

// challenge
const EV = function (make, speed, charge) {
  Car.call(this, make, speed);
  console.log(this.speed, this.make);
  this.charge = charge;
};
// linking the prototypes
EV.prototype = Object.create(Car.prototype);
// adding the methods
EV.prototype.chargeBattery = function (chargeTo) {
  this.charge = chargeTo;
};
EV.prototype.accelerate = function () {
  this.speed += 20;
  this.charge--;
  console.log(
    `${this.make} going at ${this.speed} km/h with a charge of ${this.charge}`
  );
};

const tesla = new EV('Tesla', 120, 30);
tesla.chargeBattery(90);
tesla.accelerate();
tesla.brake();
tesla.accelerate();

// class example
class Account {
  constructor(owner, currency, pin) {
    this.owner = owner;
    this.currency = currency;
    this.pin = pin;
    this.movements = [];
    this.locale = navigator.language;
    console.log(`Thanks for opening ccount, ${owner}`);
  }
  // Public interface of the objects
  deposit(val) {
    this.movements.push(val);
  }
  withdrawal(val) {
    this.deposit(-val);
  }
  approveLoan(val) {
    return true;
  }
  requestLoan(val) {
    if (this.approveLoan()) {
      this.deposit(val);
      console.log(`Loan approved & amount deposited.`);
    }
  }
}
const acc1 = new Account('Chandrakant', 'INR', 1111);
// acc1.movements.push(250);
// acc1.movements.push(-120);
acc1.deposit(250);
acc1.withdrawal(120);
console.log(acc1);
console.log(acc1.pin);
acc1.approveLoan(1000);
acc1.requestLoan(1000);
// the methods and data are accessible outside the class

// Encapsulation: Protected Properties and Methods
