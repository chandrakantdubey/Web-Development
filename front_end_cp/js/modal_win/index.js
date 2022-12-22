let overLay = document.getElementById('overlay');

overLay.style.display = 'none';

let openModal = document.getElementById('open-modal');

let closeModal = document.getElementById('close-modal');

openModal.addEventListener('click', () => {
  overLay.style.display = 'block';
});

closeModal.addEventListener('click', () => {
  overLay.style.display = 'none';
});
