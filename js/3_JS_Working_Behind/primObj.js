// call stack: functions are executed
// heap: objects are stored
// primitives are stored in call stack: EC
let age = 26;
let oldAge = age;
age = 27;
console.log(age);
console.log(oldAge);
// here js creates a unique identifier and then memory is allocated with certain address and then value is stored at specified address
// all this happens in call stack
// the identifier points to the address and not the value(which infact age = address and not the value)
// when oldAge = age, oldAge now points to the same address/value as age
// next line when age is reassigned a new memory is allocated to the value and address is stored in age variable.
// but the oldAge keeps pointing to the same value
// hence we see two different values in the console when we log them.

const self = {
  name: "Chandrakant",
  age: 30,
};
const friend = self;
friend.age = 24;
console.log(friend);
console.log(self);
// here we tried to change of friend age only but both self and friend age changed and became same.
// when a new object is created it is stored in heap with address and then value
// the newly created object identifier does not point directly to the newly created memory address in the heap
// rather it points to the newly created memory in the call stack
// the newly created memory address then points to memory address in the heap as its value
// hence we call them as reference type as the call stack memory contains reference to the heap memory address as its value.

// practicing the primitives
let lastName = "Dubey";
let oldLastName = lastName;
lastName = "Tiwari";
console.log(lastName, oldLastName);

// practicing the objects
const Shraddha = {
  firstName: "Shraddha",
  lastName: "Tiwari",
  age: 26,
};
const marriedShraddha = Shraddha;
marriedShraddha.lastName = "Dubey";
console.log("Before marriage:", Shraddha);
console.log("After marriage:", marriedShraddha);

// copying objects
const ShraddhaT = {
  firstName: "Shraddha",
  lastName: "Tiwari",
  age: 26,
  family: ["Alice", "Bob"],
};
const ShraddhaCopy = Object.assign({}, ShraddhaT);
ShraddhaCopy.lastName = "Dubey";
// new object gets created, but this is only a shallow copy --> that is first level copy
console.log("Before marriage:", ShraddhaT);
console.log("After marriage:", ShraddhaCopy);

ShraddhaCopy.family.push("Mary");
ShraddhaCopy.family.push("John");
// here we see that both get same family members as it is a shallow copy and second level was not changed.
