const colorSwitch = document.querySelector(".color-flip");
colorSwitch.addEventListener('click', (e) => {
  const randomGen = Math.floor(Math.random() * 1000000 + 1);
  document.querySelector('body').style.backgroundColor = `#${randomGen}`;
});
