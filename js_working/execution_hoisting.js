// console.log(this);//this is bind to window object.
// console.log(window);//browser provides window object
// console.log(myFunction); //entire function will get printed as it is present in the global memory.
// myFunction();//it will print as it is already in the global memory.
// console.log(fullName);
// // function declaration
// function myFunction() {
//     console.log("this is my function.");
// };
// var firstName = "Chandrakant";
// var lastName = "Dubey";
// var fullName = firstName + " " + lastName;
// console.log(fullName);




// console.log(newFunction); // this will give undefined as it is a expression function.
// // function expression
// var newFunction = function () {
//     console.log("i am expression function.");
// }



// // let and const hoisting concept
// console.log(newName);
// //error(Uncaught:ReferenceError) is produced because the variable is unintialised but declared.
// console.log(typeof newName); //this will produce uncaughterror: cannot access before initialization.
// let newName = "Chandrakant";
// console.log(newName);

// console.log(newLastName);
// // it produces Uncaught reference error: not defined because the variable is not defined at all.

// console.log(typeof firstNames); //this statement produces undefined



// function execution context.
let foo = "foo";
console.log(foo);
function getFullName(firstName, lastName) {
    console.log(arguments.length );
    let myVar = "var inside func";
    console.log(myVar);
    const fullName = firstName + " " + lastName;
    return fullName;
}
const personName = getFullName("chandrakant","dubey");
console.log(personName);