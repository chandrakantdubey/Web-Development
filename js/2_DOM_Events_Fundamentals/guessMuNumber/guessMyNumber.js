"use strict";
// for text node use textcontent
// for input fields use value
// event listener makes something happen: select the element apply the listener apply what happens
let randomNum = Math.floor(Math.random() * 20 + 1);

document.querySelector(".check").addEventListener("click", () => {
  let guessNumber = document.querySelector(".guess").ariaValueMax;
  if (guessNumber === randomNum) {
    document.querySelector(".message").textContent = "Correct Guess! Hurrahhh";
  } else if (guessNumber > randomNum) {
  }
});
