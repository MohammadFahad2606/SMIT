function flipCoin() {
  let outcomes = ["heads", "tails"];
  let randomIndex = Math.floor(Math.random() * 2);
  return outcomes[randomIndex];
}
console.log(flipCoin());
function playCoinFlip() {
  let userGuess = prompt("Heads or Tails?").toLowerCase();

  if (userGuess !== "heads" && userGuess !== "tails") {
    alert("Invalid input. Please enter 'heads' or 'tails'.");
    return;
  }

  let flipResult = flipCoin();
  let isCorrect = userGuess === flipResult;

  if (isCorrect) {
    alert(
      `Congrats! You guessed ${userGuess} and the coin landed on ${flipResult}.`
    );
  } else {
    alert(
      `Sorry! You guessed ${userGuess} but the coin landed on ${flipResult}.`
    );
  }
}
