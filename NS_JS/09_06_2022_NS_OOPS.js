// Inheritance: the properties of the parent is inherited by the child.
// Parent class
// class Person {
//     constructor(name){
//         this.name = name;
//     }

//     greet() {
//         console.log("Good morning "+this.name);
//     }
// }
// child class inheriting the parent properties.
// class Student extends Person {
//     //empty
// }

// let person1 = new Person("Chandrakant");
// person1.greet();
// let student1 = new Student("Dubey");
// student1.greet();





// super function
// class Rectangle {
//     constructor(height,width){
//         this.name = "rectangle";
//         this.height = height;
//         this.width = width;
//         console.log("super called me");
//     }

//     getName(){
//         console.log("Hi, I am a " + this.name +"!");
//     }
//     getArea(){
//         console.log(this.height*this.width);
//     }
// }

// 1. how to pass the child class constructor to parent class constructor?
// 2. name is not intend to be a new property but the one in parent.
// Super function calls/executes constructor  of parent class.
// one execution parent properties can be used using this.___
// we can pass arguments using super to parent constructor.
// class Square extends Rectangle {
//     constructor(length){
//         console.log("Befor super");
//         // this.name = "square";
//         super(length, length);
//         console.log("After super");
//         this.name ="square";
//     }
// }

// let square = new Square(5);
// square.getName();
// square.getArea();





// Prototype: is signature of an object
// every object in javascript is derived from prototype.
// the characteristics of creating properties sing . operator should be specific to objects.
// but arrays and functions show similar behaviour
// because they are derived from Object Prototype
// protoype has the ability to store newly created properties/keys.