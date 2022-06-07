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
        return this.names_;
    }
    // setter: a function that allows you to modify the values of the private variables.
    set_names(nam) {
        this.names_.push(nam);
    }

}

let obj = new MyClass();
obj.set_names("Chandrakant");
console.log(obj.get_names());
