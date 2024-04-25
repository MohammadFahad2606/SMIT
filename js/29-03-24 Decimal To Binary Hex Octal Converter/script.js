// let userName = prompt("Enter your name");
// console.log(userName.toUpperCase());
// console.log(userName.length);
// console.log(userName.slice(0, 2));

// let userNumber = +prompt("Enter your number");

// console.log(userNumber);
// userNumber = Math.ceil(userNumber);
// console.log(userNumber);
// userNumber = Math.floor(userNumber);
// console.log(userNumber);

// let userName = "Fahad";
// console.log(userName);
// console.log(userName.toLowerCase());
// console.log(userName.toUpperCase());
// userNumber = toString(userName);
// console.log(userName);

// let number = 1;
// console.log(typeof number);
// let newNumber = number + "";
// console.log(typeof newNumber);
// console.log(+newNumber);

// console.log(+"20" + 13);

let userNumber = +prompt("Please enter a number");
let askUser = +prompt("pleas enter your method Binary/Hex/Octal Converter");

if (askUser === 2) {
  console.log(userNumber.toString(2));
} else if (askUser === 8) {
  console.log(userNumber.toString(8));
} else if (askUser === 16) {
  console.log(userNumber.toString(16));
} else {
  console.log("invaled");
}
