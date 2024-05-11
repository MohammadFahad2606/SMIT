let arry1 = [["fahad", "wwr", "q141", "qead"], [1, 242, 231, 13], [true]];

let arry = ["fahad", 2, 6, true];
let edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];
for(let i =)
let totalMarks = 500;

let studentNames = [];
let askName = prompt("Pleas Enter Your Name", "Fahad");
studentNames.unshift(askName);
let studentScores = [];
let askNum = +prompt("Pleas Enter Your Marks", 483);
studentScores.unshift(askNum);

if (askNum <= 500) {
} else {
  alert("Pleas Enter Valid Marks");
}
let calculatePercentage = (score, total) => (askNum / total) * 100;
studentNames.forEach((name, index) => {
  let score = studentScores[index];
  let percentage = calculatePercentage(score, totalMarks);

  +document.write(`Student Name: ${name} <br/>`);
  +document.write(`Score: ${score}/${totalMarks}<br/>`);
  +document.write(`Percentage: ${percentage.toFixed(2)}% <br/>`);
});

let studentNum = [85, 92, 78, 64, 95, 70, 88, 76];

+document.write(`Old student Number, ${studentNum} <br/>`);
studentNum.sort();

+document.write(
  `Sorted student Number Method using .sort:", ${studentNum} <br/>`
);

let cities = [
  "Karachi",
  "Lahore",
  "Islamabad",
  "Rawalpindi",
  "Peshawar",
  "Quetta",
];
+document.write(`All Cities Name:", ${cities} <br/>`);
let selectedCities = cities.slice(0, 3);

+document.write(
  `Selected Cities Method using .slice:", ${selectedCities} <br/>`
);

let arr = ["This ", "is ", "my ", "cat"];
+document.write(`Old Arry:, ${arr} <br/>`);
let result = arr.join("");
+document.write(`Result Method using .join: ${result} <br/>`);

let phoneManufacturers = [
  "Apple",
  "Samsung",
  "Motorola",
  "Nokia",
  "Sony",
  "Haier",
];

// (a, b) => a - b;
