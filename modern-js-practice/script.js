// importing modules
console.log("Importing module");

// import { addToCart, tp as price, tq as qty } from "./shoppingCart.js";
// addToCart("Shoes", 5);
// console.log(price, qty);

// import * as shoppingCart from "./shoppingCart.js";
// shoppingCart.addToCart("bread", 10);
// console.log(shoppingCart.tp, shoppingCart.tq);

import add, { cart } from "./shoppingCart.js";
add("pizza", 2);
add("bread", 4);
add("apples", 6);
console.log(cart);

// console.log("Start fetching");
// const res = await fetch("https://jsonplaceholder.typicode.com/posts");
// const data = await res.json();
// console.log(data);
// console.log("Something");

// const getLastPost = async function () {
//   const res = await fetch("https://jsonplaceholder.typicode.com/posts");
//   const data = await res.json();

//   return { title: data.at(-1).title, text: data.at(-1).body };
// };
// const lastPost = getLastPost();
// console.log(lastPost);

// not very clean
// lastPost.then((last) => console.log(last));

// using top level await
// const lastPost2 = await getLastPost();
// console.log(lastPost2);

// module pattern
// const ShoppingCart2 = (function () {
//   const cart = [];
//   const shippingCost = 10;
//   const totalPrice = 250;
//   const totalQunatity = 46;

//   const addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to the cart.`);
//   };

//   const orderStock = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} ordered from supplier.`);
//   };

//   return {
//     addToCart,
//     cart,
//     totalPrice,
//     totalQunatity,
//   };
// })();

// ShoppingCart2.addToCart("apple", 4);
// ShoppingCart2.addToCart("pizza", 5);
// console.log(ShoppingCart2);

// CommonJS modules: works in node
// export
// export.addToCart = function (product, quantity) {
//     cart.push({ product, quantity });
//     console.log(`${quantity} ${product} added to the cart.`);
// };
// import
// const {addToCart} = require('./shoppingCart.js')

// import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";
import cloneDeep from "./node_modules/lodash-es/cloneDeep.js";

const state = {
  cart: [
    { product: "bread", quantity: 5 },
    { product: "pizza", quantity: 3 },
  ],
  user: { loggedIn: true },
};

const stateClone = Object.assign(state);

// using lodash for cloning
const stateDeepClone = cloneDeep(state);

state.user.loggedIn = false;

console.log(stateClone);
console.log(stateDeepClone);

// using hot module reload
if (module.hot) {
  module.hot.accept();
}

// classes
class Person {
  greeting = "Hi";
  constructor(name) {
    this.name = name;
    console.log(`${this.greeting}, ${this.name}`);
  }
}

const chandrakant = new Person("Chandrakant");

console.log(cart.find((el) => el.quantity >= 2));

Promise.resolve("Test").then((x) => console.log(x));

import "core-js/stable";

import "regenerator-runtime/runtime";
