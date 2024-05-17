let userInput = document.querySelector("#userInput");
let boxwrap = document.querySelector("#boxwrap");
let words = document.querySelector("#words");
let letters = document.querySelector("#letters");
let lines = document.querySelector("#lines");
let parag = document.querySelector("#paragraph");
console.log(parag.innerText);

function clickBtn() {
  boxwrap.style = "display: flex;";
  let wods = userInput.value.length;
  let leter = userInput.value.split(" ");
  let line = userInput.value.split(".");
  let pra = userInput.value.split("\n");
  console.log(pra.length);
  words.innerText = wods;
  letters.innerText = leter.length;
  letters.innerText = leter.length;
  parag.innerHTML = pra.length;
  // console.log(ck);
}
