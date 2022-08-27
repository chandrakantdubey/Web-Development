'use strict';
const btnShowModal = document.querySelectorAll('.show-modal');
const btnCloseModal = document.querySelector('.close-modal');
const overlay = document.querySelector('.overlay');
const modal = document.querySelector('.modal');

const showModal = () => {
  document.querySelector('.modal').classList.remove('hidden');
  document.querySelector('.overlay').classList.remove('hidden');
};
const closeModal = () => {
  document.querySelector('.modal').classList.add('hidden');
  document.querySelector('.overlay').classList.add('hidden');
};
for (let i = 0; i < btnShowModal.length; i++) {
  btnShowModal[i].addEventListener('click', showModal);
}

btnCloseModal.addEventListener('click', closeModal);
overlay.addEventListener('click', closeModal);

document.addEventListener('keydown', e => {
  if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal();
});
