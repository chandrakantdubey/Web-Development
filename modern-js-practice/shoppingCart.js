// exporting modules
console.log("Exporting Modules");

// blocking code
// console.log("Start fetching users");
// await fetch("https://jsonplaceholder.typicode.com/posts");
// console.log("Finish fetching");

export const shippingCost = 10;
export const cart = [];
export const addToCart = function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart.`);
};

const totalPrice = 237;
const totalQunatity = 46;

export { totalPrice as tp, totalQunatity as tq };

export default function (product, quantity) {
  cart.push({ product, quantity });
  console.log(`${quantity} ${product} added to the cart.`);
}
