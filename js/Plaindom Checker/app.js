let useInput = prompt(enter a letter).toLowerCase();
let isPlaindom = useInput.split().reverse().join();

if (useInput === isPlaindom) {
  console.log(Is Plaindom);
} else {
  console.log(Not Plaindom);
}
