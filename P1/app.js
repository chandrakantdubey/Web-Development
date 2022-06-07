const panels = document.querySelectorAll('.panel');
// this puts the elements with .panels into a node list
console.log(panels);

// adding the class of active on click and then 
panels.forEach(panel=> {
    panel.addEventListener('click', ()=> {
        removeActiveClasses();
        panel.classList.add('active');
    })
})

function removeActiveClasses() {
    panels.forEach(panel => {
        panel.classList.remove('active');
    })
}