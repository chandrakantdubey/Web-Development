// DOM-document object model
// browser creates a object - "document" and adds it to js window object
// console.log(document);
// selecting the element using the document object model, this is similar to css styling selection.

// browser creates object and stores in the document when selecting the element.

// select using getElementById
console.dir(typeof document.getElementById('main-heading'));

// using querySelector: this can be used to select anything
console.log(document.querySelector('.header'));

// using querySelectorAll
const navItem = document.querySelectorAll(".nav-item");
// this statement selects all the elements with class and creates a NodeList.



// changing the text of the element using the textContent and innerText

const mainHeading = document.getElementById('main-heading');
// mainHeading.textContent = "I am changing the text content.";

console.log(mainHeading.textContent);
// textContent will grab and show all the text including the ones with the property hidden.

console.log(mainHeading.innerText);
// innerText only gives the text that is not hidden/displayed on the screen.



// changing the styles of the element.
// selecting the element
const newheading = document.querySelector('div.headline h2')
// selecting the style and applying the property.
newheading.style.color = "Olive";
newheading.style.backgroundColor = "white";
newheading.style.padding = "5px";
// to use the properties with dash in between: remove the dash and write in camel casing.


// get and set attributes. (eg. href is attribute of the anchor tag)
// getting the element and creating the object
const link = document.querySelector("a");
// using getAttribute to get the attribute.
console.log(link.getAttribute("href"));
// using a slice to remove the hash from home element
console.log(link.getAttribute("href").slice(1));
// setting the attribute
link.setAttribute("href", "https://www.google.com");
// new Atribute
console.log(link.getAttribute("href"));
// another example
const inputElement = document.querySelector(".form-todo input");
console.log(inputElement.getAttribute("type"));




// getting multiple elements using getElementsByClassName
let navItems = document.getElementsByClassName("nav-item");
console.log(navItems[1]);
// this gives a html element which is array like object
// length property and allows indexing for iteration
// we can use simple for loop, for of loop with html collection but not forEach method.
console.log(navItems.length); // gives length -->3
console.log(typeof navItems);
// this is not an array checking
console.log(Array.isArray(navItems));
// this gives false as it is html collection

// converting collection to array
navItems = Arrays.from(navItems);

// using querySelectorAll
const newNav = document.querySelectorAll(".nav-item");
console.log(newNav);
// this gives a node list, allows indexing


// looping through the items
const navItemItr = document.getElementsByTagName("a")
for(let i = 0; i < navItemItr.length; i++){
    const navItem = navItemItr[i];
    navItem.style.backgroundColor = "white";
    navItem.style.padding = "3px";
    navItem.style.color = "olive";
    navItem.style.fontWeight = "bold";
}



