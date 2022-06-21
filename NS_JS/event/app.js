const grandparent = document.querySelector('.grandparent');
const parent = document.querySelector('.parent');
const child = document.querySelector('.child');
// console.log(grandparent);
// console.log(parent);
// console.log(child);



document.addEventListener('click', e => {
    console.log("Document Capture")
}, {capture: true})

grandparent.addEventListener('click', e =>{
    console.log("Grandparent Capture");
}, {capture: true});

parent.addEventListener('click', e => {
    console.log("Parent Capture");
}, {capture: true});

child.addEventListener('click', e => {
    console.log("Child Capture");
}, {capture: true});
