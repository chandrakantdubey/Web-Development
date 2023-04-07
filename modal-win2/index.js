"use strict";

const overlay = document.querySelector(".overlay");
const modal = document.querySelector(".modal-container");
const btnOpenModal = document.querySelectorAll(".open-modal");
const btnCloseModal = document.querySelector(".close-modal");

function openModal() {
  overlay.classList.remove("hidden");
  modal.classList.remove("hidden");
}

function closeModal() {
  overlay.classList.add("hidden");
  modal.classList.add("hidden");
}

for (let i = 0; i < btnOpenModal.length; i++) {
  btnOpenModal[i].addEventListener("click", openModal);
}

btnCloseModal.addEventListener("click", closeModal);
overlay.addEventListener("click", closeModal);
document.addEventListener("keydown", (e) => {
  if (e.code === "Escape") closeModal();
});
