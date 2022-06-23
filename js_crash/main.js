// alert("Hello");
// alert produces an alert box on the window
// shitty and useless blocks the execution and the entire window.


// use console object to print to the console of the browser.
console.log("Logging into the console.");
console.error("You just messed, produced error.");
console.warn("Be polite and do the right thing or bang!!");

// variables can be created using var, const and let
// using a variable without declaring is allowed unless in strict mode.
const CONSTANT = "I am fucking constant you cant reasign me.";
let HOOKER = "You can hook me again as you want";
var shit = "I am bloody buggy in the entire javascript";


// Primitive data types.
// String, Numbers, Boolean, null, undefined, Sybmol(ES6-2015)
let stringVar = "I am a string variable in single quote";
let number = 46;
let iAmBool = false;
let decNum = 4.5;
let stupid = null;
// null just shits up as it gives an object on the typeof
let crazy = undefined;
// testing the variables.
console.log(typeof stupid);


// Strings
let nameis = "Chandrakant";
let age = 26;
// concatention old way 
console.log(nameis+" "+age);
// template literal use the ${var}
console.log(`${nameis} ${age}`)
// length property(property is without a parenthesis)
console.log(nameis.length);
console.log(nameis.substring(2,5));
console.log(nameis.toUpperCase());
console.log(nameis.toLowerCase());
console.log(nameis.split(''));
// split gives you an array


// Arrays
// using the constructor
const numbers = new Array(1,2,3,4,5);
console.log(numbers);
// using the brackets.
const fruits = ["Mango","Apple",34,67];
// accessig the value uses indexes
console.log(fruits[1]);
// adding the values to the arrays
fruits[3] = "Grapes";
// here we just overided the value
console.log(fruits);
// push to the end of the array
fruits.push('Strawberry');
console.log(fruits);
// pop pulls out the last element
console.log(fruits);
// unshift pushes an element to first
fruits.unshift("Guava");
console.log(fruits);
// shift pulls out the first element
console.log(fruits.shift());
// to check if its an array
console.log(Array.isArray(fruits));
// to get indexof something
console.log(fruits.indexOf("Apple"));


// Objects: this are the key value pairs.
let person = {
    firstName: "John",
    lastName: "Doe",
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: '50 main st.',
        city: 'Boston',
        state: 'MA'
    }
};
console.log(person);
// getting the value
console.log(person.firstName);
// chaining to obtain a value
console.log(person.hobbies[1]);
// here the square brackets are used because we are accessing the index of the array.
console.log(person['firstName']);
// this is a second of accessig the key value, using the square brackets but the property is to be included in the quotes.
// using the destructuring to put them to the values of the variables.
let{firstName, lastName} = person;
console.log(`${firstName} ${lastName}`);
// add properties 
person.email = "xyz@gmail.com";
console.log(person);


// Array of Objects
let todos = [
    {
        id: 1,
        text: "Take out trash",
        isCompleted: true,
    },
    {
        id: 2,
        text: "Meeting with boss",
        isCompleted: true,
    },
    {
        id: 3,
        text: "Dentist appt.",
        isCompleted: false,
    },
];
// accessing the value
console.log(todos[1].text);
// JSON
let todosJSON = JSON.stringify(todos);
console.log(todosJSON);



// loops
// for loop
for(let i = 0; i < 10; i++){
    console.log(i);
}
let i =0;
// while loop
while(i<10)
{
    console.log(i);
    i++
}
// for of loop
for(let todo of todos){
    console.log(todo.text);
}




// high order array method.
// they taken parameter as a function.
// forEach
todos.forEach(function(todo){
    console.log(todo.text);
});
// map: creates a new array
let todoTextMap = todos.map(function(todo){
    return todo.text;
});
console.log(todoTextMap);
// filter: based on the condition
let todoTextFilter = todos.filter(function(todo){
    return todo.isCompleted === true;
});
console.log(todoTextFilter);
// chaining the array methods
let todoTextFilterMap = todos.filter(function(todo){
    return todo.isCompleted === true;
}).map(function(todo){
    return todo.text;
});
console.log(todoTextFilterMap);


// conditionals
let x = 10;
// use of double equals compare only value
if(x == 10){
    console.log("x is 10");
}

let y = "10";
// use of double equals compare only value
if(y === 10){
    console.log("y is 10");
}
else {
    console.log("y is 10");
}

// ternary conditional
let z = 10;
const color = (z <= 10)? 'orange': 'blue';
console.log(color);

// switch
switch(color){
    case 'red':
        console.log('red');
        break;
    case 'blue':
        console.log('blue');
        break;
    default:
        console.log("neither");
        break;
}




// functions
// function definition
function addNums(num1=1, num2=1){
    console.log(num1+num2);
}
// calling a function
addNums(5,4);
// calling a function without passing and testing the default values.

function addNum(num1,num2){
    return num1+num2;
}
console.log(addNum(2,3));

// arrow function
// first way: {}braces are needed for multiple statements and the return keyword.
// () parenthesis is need for multiple parameters or none
const addnum = (num1,num2) => {
    return (num1+num2);
}
console.log( addnum(3,7));
// second way: if there is only one parameter no need for (paranthesis). also if return statement is not used no need of curly braces{}
const addnums = num1 => (num1+num1);
console.log(addnums(5));




// OOPS
// constructor function
function Person(firstNames, lastNames, dob){
    this.firstNames = firstNames;
    this.lastNames = lastNames;
    this.dob = dob;
}

// instantiate object
const person1 = new Person('John','Doe','14-06-1995');
console.log(person1.firstNames);

// constructor function: for date object
function Persons(fName, lName, DOB){
    this.fName = fName;
    this.lName = lName;
    this.DOB = new Date(DOB);
}
const person2 = new Persons('Mary','Smith','3-16-1970');
console.log(person2.DOB.getFullYear());

// creating methods
function Personss(fName, lName, DOB){
    this.fName = fName;
    this.lName = lName;
    this.DOB = new Date(DOB);
    this.getBirthYear = function (){
        return this.DOB.getFullYear();
    }
    this.getFullName = function() {
        return `${this.fName} ${this.lName}`;
    }
}
const person3 = new Personss('Mary','Smith','3-16-1970');
console.log(person3.getFullName());



// prototypes 
console.log(person3);
// CLASS
// attaching the methods to the prototypesusing class

class Personsss{
    constructor (fName, lName, DOB) {
        this.fName = fName;
        this.lName = lName;
        this.DOB = new Date(DOB);
    }
    getBirthYear(){
        return this.DOB.getFullYear();
    } 
    getFullName() {
        return `${this.fName} ${this.lName}`;
    }
}

const person4 = new Personsss('Mary','Smith','3-16-1988');
console.log(person4.getBirthYear());
console.log(person4);