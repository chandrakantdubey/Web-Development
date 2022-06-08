const progres = document.getElementById('progress');
const prev = document.getElementById('prev');
const next = document.getElementById('next');
const circle = document.querySelectorAll('.circle');

let currentActive = 0;

next.addEventListener('click', ()=>{
    currentActive++;

    if(currentActive > circle.length){
        currentActive = circle.length;
    }
    console.log(currentActive);
    // update();

})

next.addEventListener('click', ()=>{
    currentActive--;
    if(currentActive<1){
        currentActive = 1;
    }
    // update();
})

// function update(){
//     circle.forEach((circles, idx) => {
//         if(idx < currentActive){
//             circles.classList.add('active');
//         }else{
//             circles.classList.remove('active');
//         }    
//     });

//     const actives = document.querySelectorAll('active');

// //     console.log(actives.length/circle.length)

// }