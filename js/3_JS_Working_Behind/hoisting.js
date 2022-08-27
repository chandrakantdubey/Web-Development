// hoisting with variables
console.log(me);
// console.log(job);
// console.log(year);
var me = "Chandrakant";
let job = "Engineer";
const year = "1996";

// hoisting with functions
console.log(addDec(3, 4));
// console.log(addExpr(3, 4));
// console.log(addArr(3, 4));
function addDec(a, b) {
  return a + b;
}
const addExpr = function (a, b) {
  return a + b;
};
const addArr = (a, b) => a + b;

// hoisting functions using var
console.log(addExpre);
console.log(addArro);
// this will give undefined as var is hoisted
// console.log(addExpr(3, 4));
// console.log(addArro(3, 4));
// this will give an error not a function as it is being treated as variable
var addExpre = function (a, b) {
  return a + b;
};
var addArro = (a, b) => a + b;

// pitfall of hoisting
if (!numProducts) deleteShoppingCart();
var numProducts = 10;
function deleteShoppingCart() {
  console.log("All products deleted.");
}
// the above code beahaves as such because var varaibale has undefined value and !undefined == true
// variables declared with var create a window object property
