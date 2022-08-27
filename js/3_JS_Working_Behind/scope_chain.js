"use strict";

function calcAge(birthYear) {
  const age = 2022 - birthYear;
  // console.log(firstName);
  // this runs okay as firstName is in the global scope.

  function printAge() {
    let output = `${firstName} you are ${age}, born in ${birthYear}`;
    // this executes as the varaiables exists in global scope and function scope
    console.log(output);

    if (birthYear >= 1981 && birthYear <= 1996) {
      var millenial = true;
      //   creating new variable with same name as outer variable
      const firstName = "Abhay";
      const str = `Oh, you are a millenial ${firstName}`;
      // in the the above statement "Abhay will be used as it is int the same scope"
      console.log(str);
      function add(a, b) {
        return a + b;
      }
      //   reassigning a outer scope variable
      output = "NEW OUTPUT";
    }

    // error as let and const are block scoped
    // console.log(str);

    console.log(millenial);
    // no error as var has a function scope and do not care about block scope.

    // console.log(add(4,5));
    // this gives an error as functions are block scope when used with strict mode

    console.log(output);
    // we reassigned the variable
  }
  printAge();
  return age;
}

const firstName = "Chandrakant";
calcAge(1996);
// console.log(age);
// here we cannot access the age variable
