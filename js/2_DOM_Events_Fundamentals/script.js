const colorSwitch = document.querySelector(".color-flip");
colorSwitch.addEventListener("click", () => {
  const randomGen = Math.floor(Math.random() * 1000000);
  document.querySelector("body").style.backgroundColor = `#${randomGen}`;
  foo();
});
function foo() {
  return foo();
}
