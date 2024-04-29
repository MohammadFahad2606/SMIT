let arry = ["fahad", 2, 6, true];
let edu = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M.Phil.", "PhD"];

const totalMarks = 500;

const studentNames = [];
let askName = prompt("Pleas Enter Your Name");
studentNames.unshift(askName);
const studentScores = [];
let askNum = +prompt("Pleas Enter Your Marks");
studentScores.unshift(askNum);

// if (askNum <= 500) {

// } else {
//   alert("Pleas Enter Valid Marks");
// }
const calculatePercentage = (score, total) => (score / total) * 100;
studentNames.forEach((name, index) => {
  const score = studentScores[index];
  const percentage = calculatePercentage(score, totalMarks);

  +document.write(`Student Name: ${name} <br/>`);
  +document.write(`Score: ${score}/${totalMarks}<br/>`);
  +document.write(`Percentage: ${percentage.toFixed(2)}% <br/>`);
});
