'use strict';

// Destructring
// Destructuring Arrays
const restaraunt = {
  name: 'Chandrakant Pizza House',
  location: 'Naskik',
  categories: ['Italian', 'Pizzeria', 'Vegetarian', 'Organic'],
  mainMenu: ['Mozrella', 'Farmhouse', 'Corn-Cheese'],
  starterMenu: ['Garlic Bread', 'Caprese Salad', 'Fries'],
  openingHours: {
    mon: {
      open: 9,
      close: 5,
    },
    tue: {
      open: 9,
      close: 7,
    },
    wed: {
      open: 12,
      close: 11,
    },
  },
  order: function (starterIndex, mainIndex) {
    return [this.starterMenu[starterIndex], this.mainMenu[mainIndex]];
  },
  // destructring the object passed as parameters
  orderDelivery: function ({ starterIndex, mainIndex, time, address }) {
    console.log(
      `Order recieved! ${this.mainMenu[mainIndex]}, and ${
        this.starterMenu[starterIndex]
      }, at ${time} to be delivered at ${address} till ${time + 0.3}`
    );
  },
};

restaraunt.orderDelivery({
  time: 22.0,
  address: 'Pathardi',
  mainIndex: 2,
  starterIndex: 2,
});
// console.log(jakeOrder);

const arr = [2, 4, 6];
const x = arr[0];
const y = arr[1];
const z = arr[2];
console.log(x, y, z);
// similar to the below
const [a, b, c] = arr;
console.log(a, b, c);
// destructring by skipping
let [first, , third] = restaraunt.categories;
console.log(first, third);
// application of destructuring
[third, first] = [first, third];
console.log(first, third);
// using destructring to return a array from function.
console.log(restaraunt.order(2, 1));
let [starter, main] = restaraunt.order(1, 2);
console.log(starter, main);
// nested array destructring
let nested = [2, 4, [5, 6]];
let [num1, , num2] = nested;
console.log(num1, num2);
let [num3, , [num4, num5]] = nested;
console.log(num3, num4, num5);
// default values: useful for api
const [p = 1, q = 1, r = 1] = [8];
console.log(p, q, r);

// object destructuring: order does not matter
let { name, categories, openingHours } = restaraunt;
console.log(name, categories, openingHours);
// variable names different than the actual property names
let { name: restarauntName, categories: tags } = restaraunt;
console.log(restarauntName, tags);
// default values
let { menu = [], starterMenu: starters = [] } = restaraunt;
console.log(menu, starters);
// mutating the variables while destructuring
let m = 111;
let n = 999;
const obj = { m: 23, n: 7, o: 14 };
({ m, n } = obj);
console.log(m, n);
// nested objects
let {
  wed: { open, close },
} = openingHours;
console.log(open, close);

// spread operator
let arr1 = [1, 2, 3, 4];
let newArr = [...arr1, 5];
console.log(newArr);
// above creates a shallow copy
// merging two array
let arr2 = [...arr1, ...newArr];
console.log(arr2);
// spread operator works on all the iterables(arrays, strings, maps, sets but not objects)
let str = 'Hello';
let str2 = [...str, 'World'];
console.log(str2);
// spread operator can be used only where comma separated values are expected
console.log(`${str.toString()} World`);
