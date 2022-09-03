let carouselArr = document.querySelectorAll('.carousel-item');
console.log(carouselArr);
let slidePos = 0;
let totalSlides = carouselArr.length;

let nextCarSlide = document.getElementById('carousel-item-next');
let prevCarSlide = document.getElementById('carousel-item-prev');

nextCarSlide.addEventListener('click', nextSlide);
prevCarSlide.addEventListener('click', prevSlide);

function nextSlide() {
  hideAll();
  if (slidePos !== totalSlides - 1) {
    slidePos++;
  } else slidePos = 0;
  carouselArr[slidePos].classList.add('carousel-item-visible');
}

function prevSlide() {
  hideAll();
  if (slidePos === 0) {
    slidePos = totalSlides - 1;
  } else slidePos--;
  carouselArr[slidePos].classList.add('carousel-item-visible');
}

function hideAll() {
  for (let slide of carouselArr) {
    slide.classList.remove('carousel-item-visible');
    slide.classList.add('carousel-item-hidden');
  }
}
