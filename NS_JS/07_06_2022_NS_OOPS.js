// topics from OOPS in Javascript
// gettter and setter

class MyClass {
    constructor() {
        this.names_ = []; 
        //variables with underscore are considered private and specifies that you will not use the variables outside.
    }

    // getter: function which returns/gets the values of private variables.
    // when something is being returned we are returning a copy
    get_names() {
        return [...this.names_]; // this is how you send a copy of array
    }

    // setter: a function that allows you to modify the values of the private variables.
    set_names(nam) {
        this.names_.push(nam);
        // return [...this.names_];
        // this.names_.push(nam);
    }
}

// creating the object, modifying using setter and accessing using getter.
let obj = new MyClass();
obj.set_names("Chandrakant");
console.log(obj.get_names());

// creating another object and modifying using getter and setter.
let names = obj.get_names();
names.push("Newton");
console.log(names);

// do not use the variables ending with underscore directly! Should use getter and setter.
// console.log(obj.names_);


// mutability: if a value is being referenced by more than one reference change made to any reference will be reflected in the other as well.
// arrays, objects are mutable.
// numbers, string are immutable


// Cloning/copying an object
var object1 = {
    a: 1,
    b: {
        c:2
    }
}
// var object2 = object1;
// object2['d'] = 'str';
// console.log(object1);
// console.log(object2);
// both have same values as they are both referencing to same object.



//Attempt 1: create copy of object
var object3 = Object.assign({}, object1);
object1['d'] = 'str';
console.log(object3);
// here the d wont come in object3

object1['b']['e'] = 'unexpected';
console.log(object1);
console.log(object3);
// here the b gets e because assign() creates a shallow copy: not perfectly decoupled.


// Attempt2: deep copy/true copy: slow process and takes time
var object4 = JSON.parse(JSON.stringify(object1));
object1['b']['f'] = 'unexpected';
console.log(object1);
console.log(object4);
