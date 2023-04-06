// activating the strict mode for the entire code
'use strict';

// using the feature of strict mode
// let hasLic = false;
// const passTest = true;
// if(passTest) hasLi = true;
// if(hasLic) console.log('Can drive.');
// w/o strict mode the error will not show-up

// functions: reusable piece of code: it is value in js
// takes in argumets as parameter and returns value
// we can set default values for parameters
// returned values needs to be stored to use

// function declaration: can be called/invoked before defined: hoisting
// function fruitProcessor(apples = 0, oranges = 0){
//     const juice = `Juice with ${apples} apples and ${oranges ? oranges : "."}${oranges? " oranges.": ""}`
//     return juice;
// }
// const appleOrange = fruitProcessor(3,2)
// console.log(appleOrange);

// funnction expression
// const fruitProcessorExp = function(apples,oranges){
//     const juice = `Juice with ${apples} apples and ${oranges ? oranges : "."}${oranges? " oranges.": ""}`
//     return juice;
// }
// console.log(fruitProcessorExp(3,4));

// arrow function: ES6: to write one liners: do not get "this"
// const fruitProcessorArr = (apples, oranges)=>{
//     const juice = `Juice with ${apples} apples and ${oranges ? oranges : "."}${oranges? " oranges.": ""}`
//     return juice;
// }
// console.log(fruitProcessorArr(6,8));

// functions calling other functions
// function cutFruitPieces(fruit){
//     return fruit*4;
// }
// function fruitProcessorPiceces(apples, oranges){
//     const applePieces = cutFruitPieces(apples);
//     const orangePieces = cutFruitPieces(oranges);
//     return `Juice with ${applePieces} apple pieces and ${orangePieces ? orangePieces : "."}${orangePieces? " orange pieces.": ""}`
// }
// console.log(fruitProcessorPiceces(5,6));

// Arrays: linear data structure: store, retrieve, mutate, delete
// Arrays in JS are 0 indexed
// array literal syntax
// const friends = ['Priya', 'Abhay', 'Raju'];
// console.log(friends);
// array constructor
// const friendsArr = new Array('Priya', 'Abhay', 'Raju')
// console.log(friendsArr);
// accessing the elements of array
// console.log(friends[0]);
// console.log(friends[1]);
// checking the lenght of the array
// console.log(friends.length);
// console.log(friends[friends.length-2]);
// mutating the array
// friends[2] = "Shraddha";
// console.log(friends);
// array can hold different values
// expressions/functions are converted to the values and stored
// let arr1 = ["String", 46, true, Symbol(45), friends, undefined === true];
// console.log(arr1);
// using + operator with whole array converts it to string
// console.log(friendsArr+"Thapa");

// Array methods
// const newFriends = ["Priya", "Abhay"];
// push("value") / unshift("value") : adds an element at end/start of the array: returns length of arr
// console.log(newFriends.push('Raju'));
// console.log(newFriends.unshift("Shraddha"));
// pop("value")/shift('value'): removes a element from last/start: returns the removed element
// console.log(newFriends.pop());
// console.log(newFriends.shift());
// indexOf('value'): indexof the element || -1 element not present
// console.log(newFriends.indexOf('Priya'));
// console.log(newFriends.indexOf('Shraddha'));
// includes('value'): true / false: to write conditional statements
// console.log(newFriends.includes('Priya'));
// console.log(newFriends.includes('Shraddha'));

// Objects: unordered collection of {key: value} pairs, separated by commas in {}
// to access a variable inside a method we need to use this keyword
// this === object calling the method
// Object literal syntax
const chandrakant = {
  firstName: 'Chandrakant',
  lastName: 'Dubey',
  birthYear: 1996,
  job: 'Engineer',
  friends: ['Priya', 'Abhay'],
  hasDriverLic: false,

  // calcAge: function(){
  //     return 2023-this.birthYear
  // }

  // to reduce computation we can create a property using this keyword
  calcAge() {
    this.age = 2023 - this.birthYear;
    return this.age;
  },
};
// accessing the data from objects obj.propName, obj[computed expression value => string]
// console.log(chandrakant.firstName);
// console.log(chandrakant["friends"][0]);
// const interestedIn = prompt("What do you want to know about Chandrakant!");
// console.log(chandrakant[interestedIn]);
// add properties to object obj.propName = "" , obj[propName] = ""
// console.log(chandrakant.friends.push("Shraddha"));
// console.log(chandrakant.location = "India")
// console.log(chandrakant);

// Object Methods
// console.log(chandrakant.calcAge(), chandrakant["calcAge"]())
// or we can do this based on calculated age property
// console.log(chandrakant.age);

// Iterating with for loops: for(initialValue; condition; counter)
for (let i = 0; i < 3; i++) {
  console.log('Loop execution: ' + i);
}
