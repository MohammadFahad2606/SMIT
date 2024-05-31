let main = document.querySelector(".main");
const colorPalette = [
  "#1abc9c", // Turquoise
  "#2ecc71", // Emerald
  "#3498db", // Peter River
  "#9b59b6", // Amethyst
  "#34495e", // Wet Asphalt
  "#16a085", // Green Sea
  "#27ae60", // Nephritis
  "#2980b9", // Belize Hole
  "#8e44ad", // Wisteria
  "#2c3e50", // Midnight Blue
  "#f1c40f", // Sun Flower
  "#e67e22", // Carrot
  "#e74c3c", // Alizarin
  "#ecf0f1", // Clouds
  "#95a5a6", // Concrete
  "#f39c12", // Orange
  "#d35400", // Pumpkin
  "#c0392b", // Pomegranate
  "#bdc3c7", // Silver
  "#7f8c8d", // Asbestos
];
// console.log(colorPalette[2]);

for (let i = 0; i <= colorPalette.length - 1; i++) {
  main.innerHTML += `<div onclick="copyClor(this)" style="background-color: ${colorPalette[i]};" class="colrBoxCont">
  <p class="copy">COPY</p>
</div>`;
}
let show = document.querySelector("#show");
function copyClor(a) {
  var color = a.style.backgroundColor;
  navigator.clipboard.writeText(a.style.backgroundColor);
  show.style.backgroundColor = "flex";
  show.classList.add("display");
}

// setTimeout(copyClor, 3000);
// function test() {
//   console.log((show.backgroundColor = "#c00000"));
// }
// // let ary = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "a", "b", "c", "d", "e", "f"];

// function getRandomHexColor() {
//   for (let i = 0; i < 5; i++) {
//     let randomColor = Math.floor(Math.random() * ary.length);
//     for (let index = 0; index < 20; index++) {
//       console.log(ary[randomColor]);
//     }
//   }
// }
// getRandomHexColor();

// for (let i = 1; i <= 20; i++) {
//   main.innerHTML += `<div class="colrBox"></div>`;
// }
// let main = document.querySelector(".main");
// const ColorPalette = [
//   { name: "Turquoise", hex: "#1abc9c" },
//   { name: "Emerald", hex: "#2ecc71" },
//   { name: "Peter River", hex: "#3498db" },
//   { name: "Amethyst", hex: "#9b59b6" },
//   { name: "Wet Asphalt", hex: "#34495e" },
//   { name: "Green Sea", hex: "#16a085" },
//   { name: "Nephritis", hex: "#27ae60" },
//   { name: "Belize Hole", hex: "#2980b9" },
//   { name: "Wisteria", hex: "#8e44ad" },
//   { name: "Midnight Blue", hex: "#2c3e50" },
//   { name: "Sun Flower", hex: "#f1c40f" },
//   { name: "Carrot", hex: "#e67e22" },
//   { name: "Alizarin", hex: "#e74c3c" },
//   { name: "Clouds", hex: "#ecf0f1" },
//   { name: "Concrete", hex: "#95a5a6" },
//   { name: "Orange", hex: "#f39c12" },
//   { name: "Pumpkin", hex: "#d35400" },
//   { name: "Pomegranate", hex: "#c0392b" },
//   { name: "Silver", hex: "#bdc3c7" },
//   { name: "Asbestos", hex: "#7f8c8d" },
// ];
// console.log(ColorPalette[1].hex);

// for (let i = 1; i <= ColorPalette.length; i++) {
//   main.innerHTML += `<div style="background-color: ${ColorPalette[i].hex} "class="colrBox">
//   <span>${ColorPalette[i].name}</span>
// </div>`;
// }
