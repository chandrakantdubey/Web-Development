const a = "Chandrakant";
first();
function first() {
  const b = "Hello";
  second();

  function second() {
    const c = "Hi";
    console.log(c + b + a);
    third();
  }
}
function third() {
  const d = "Hey!";
  //   console.log(d + c + b + a);
}

// Global a = "Jonas", first = <function>, third = <function>
// first b = "Hello" second = <function>
// second c = "Hi"
// third d = "Hey!"

// Global scope a = "Jonas", first = <function>, third = <function>
// first() scope b = "Hello" second = <function> , a = "Jonas" first = <function> third = <function>
// second() scope c = "Hi" , b = "Hello" second = <function> , a = "Jonas" first = <function> third = <function>
// third() scope d = "Hey!" , a = "Jonas" first = <function> third = <function>

// Reference error because there is no way to access the c and b by third function even though second function called it.
