let userInput = document.querySelector("#userInput");
let time = document.querySelector("#time");
let date = document.querySelector("#date");
let line = document.querySelector("#line");
let countaner = document.querySelector("#countaner");

function add() {
  if (userInput.value == "") {
    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "Please Enter Something",
    });
  } else {
    let now = new Date();
    countaner.innerHTML += `<div id="line" class="line">
  <div class="lineWrap">
    <div class="date">
      <h4 id="date">${now.toLocaleDateString()}</h4>
      <h4 id="time">${now.toLocaleTimeString()}</h4>
    </div>
    <h5>
      ${userInput.value}
    </h5>
  </div>
  <div onclick="buttDel()" id="buttDel">🗑️</div>
</div>`;
  }
  userInput.value = "";
  return line;
}

function buttDel() {
  Swal.fire({
    icon: "error",
    title: "Wait...",
    text: "Please Wait I Am Working On It",
  });
}
