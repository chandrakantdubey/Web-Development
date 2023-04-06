// hello world!
// alert("Hello! from JS");
// console.log("Hello awesome developers!!");

// Values and variables
// values are the most basic unit in code.
// a chunk of bits => value => number/string/boolean
// console.log("Chandrakant Dubey");
// console.log(46);
// console.log(true);

// variables are identifiers/name/reference for values
// values are stored in the computers memory if not bound dispate
// we need to assign/bind it to some name or reference
// this reference we can use again and again
// let numb = 46;
// console.log(numb);

// variables can be named using only A-Z, a-z, 0-9, $, _
// variables cannot start with a number or use reserved keywords
// variables in js are named in camelCase, single word - smallCase
// constants are written with upperCase
// Capital case is mostly used for OOP
// varaible names should be descriptive
// let firstName = "Chandrakant";
// let age = 26;
// console.log(firstName + " is " + age + " years old.");

// Data Types: in js all values can be: Primitives || Objects
// Primitive Types: number, string, boolean, null, undefined, Symbol, BigInt
// typeof/typeof(var) is operator to check data type
// console.log(typeof "Chandrakant Dubey");
// console.log(typeof 46);
// console.log(typeof true);
// console.log(typeof null);
// console.log(typeof undefined);
// console.log(typeof Symbol(46));
// console.log(typeof BigInt(46));

// JS has dynamic typing: do not need to define type of variable
// Data types are determined automatically: can assign different types to variables
// let dynamicTyping = 45;
// console.log(dynamicTyping);
// dynamicTyping = "Changing the value to different type"
// console.log(dynamicTyping);

// let const var
// let: mutuable => may/may not initialise, non-redeclarable, block scoped,
// const: cannot be reassigned => initialised, non-redeclarable
// var: mutable, reassigned, redeclared, function scoped

// operators: transform or combine values

// binary arithmetic operators(ltr): + - * / % **
// let num1 = 100;
// let num2 = 7;
// console.log(num1+num2);
// console.log(num1-num2);
// console.log(num1*num2);
// console.log(num1/num2);
// console.log(num1%num2);
// console.log(num1**num2);

// unary arithmetic(rtl): + - ++ --
// let num3 = 5
// let num4 = 5;
// console.log(++num3, num4++)
// console.log(num3, num4);
// console.log(--num3, num4--);
// console.log(num3, num4);
// let num5 = '5';
// console.log(-num5);
// console.log(+num5);

// concatenation + (rtl) : converts to string if any of right part is string
// let num6 = 5;
// let num7 = 'fifty'
// console.log(num7 + num6);

// (ltr): equality === == inequality != !==
// console.log(undefined == null);
// console.log(undefined === null);
// console.log(null != undefined);
// console.log(NaN !== NaN);

// comparison(ltr): > < <= >=
// let num8 = 5;
// let num9 = 6;
// console.log(num8 > num9);
// console.log(num8 < num9);
// console.log(num8 >= num9);
// console.log(num8 <= num9);

// in operator(ltr)
// let arr = [4,5,6,7]
// console.log(5 in arr);

// Strings "double", 'single', `Template ${expression}`
// let str1 = 'Single line string';
// console.log(str1);
// let str2 = 'Single line string \
// written on multiple line\
// using backslash';
// console.log(str2);
// let str3 = 'Multi line string \nwith newline character'
// console.log(str3);
// let str4 = `Template literals can have js expressions: ${5==5}`
// console.log(str4);

// conditional statements
// if(true){
//     console.log("Hello from JS")
// }
// let js = "not fun"
// if(js==='fun'){
//     console.log('JS is fun');
// }else{
//     console.log("JS is not fun");
// }
