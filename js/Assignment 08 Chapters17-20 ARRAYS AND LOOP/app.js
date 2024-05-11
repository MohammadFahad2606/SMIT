+document.write(
  `2. Declare and initialize a multidimensional array
    representing the following matrix<br />`
);

+document.write(`let matrix = [
    [1, 2, 3],
    [4, 5, 6],
    [7, 8, 9],
  ];<br />`);
let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9],
];

+document.write(`Multidimensional answer matrix:  ${matrix[0][1]}<br />`);
+document.write(
  `3. Write a program to print numeric counting from 1 to 10.<br />`
);

for (let i = 1; i <= 10; i++) {
  +document.write(`${i}<br />`);
}
+document.write(`4. Write a program to print multiplication table of any
number using for loop. Table number & length should be
taken as an input from user.<br />`);

let tableNumber = prompt("Enter Table Number", 2);
let tableLength = prompt("Enter Table Length", 10);

for (let i = 1; i <= tableLength; i++) {
  +document.write(`${tableNumber} x ${i} = ${tableNumber * i} <br />`);
}
+document.write(`<br />`);
+document.write(`<br />`);
+document.write(`<br />`);
+document.write(`<br />`);
