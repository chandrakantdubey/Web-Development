const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

let pwdGen = document.querySelector(".pwd-btn");
let pwd1 = document.querySelector("#pwd1");
let pwd2 = document.querySelector("#pwd2");
let copyBtn1 = document.querySelector(".copy-btn-1");
let copyBtn2 = document.querySelector(".copy-btn-2");

function randNum() {
  return Math.floor(Math.random() * 90 + 1);
}

function genrate() {
  let value = document.querySelector("#pwd-length").value;
  let pwdLength = value ? (value <= 15 && value > 8 ? value : 15) : 8;
  let pwd = "";
  for (let i = 0; i < pwdLength; i++) {
    let num = randNum();
    pwd += characters[num];
  }
  return pwd;
}

pwdGen.addEventListener("click", () => {
  pwd1.value = genrate();
  pwd2.value = genrate();
});

copyBtn1.addEventListener("click", () => {
  navigator.clipboard
    .writeText(pwd1.value)
    .then(() => alert("Copied the text: " + pwd1.value));
});
copyBtn2.addEventListener("click", () => {
  navigator.clipboard
    .writeText(pwd2.value)
    .then(() => alert("Copied the text: " + pwd2.value));
});
