function printFullName (fname, lname){
    function printName() {
        console.log(fname, lname);
    }
    return printName;
    // here the function takes local memory along with it when returned.
}
console.log(printFullName.length);
const ans = printFullName("Chandrakant", "Dubey");
ans(); // prints because it carries the local memory along with it because we returned a function as value.
console.log(ans);
console.log(ans.length); // 0: as it has no argument

// this is closure property where a nested function has access to variables of the parent function.