// const btn = document.querySelector('.btn-headline');
// console.dir(btn);
// btn.onclick = function(){
//     console.log("you clicked me");
// }


// addEventListener
// using declaration function
// function clickMe(){
//     console.log("you clicked me");
// }
// btn.addEventListener('click', function(){
//     console.log("you clicked me");
// });
// using arrow function
// btn.addEventListener('click', () => {
//     console.log("you clicked me");
// });
// this value for normal function is the element itself.

const btn = document.querySelector('.btn-headline');
btn.addEventListener('click', (e) => {
    // console.log("you clicked me");
    // console.log("Value of this");
    console.log(e.currentTarget);
});
// arrow function this value is window