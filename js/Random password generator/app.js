let sliderEl = document.querySelector("#range2");
let sliderValue = document.querySelector(".uservalue");

sliderEl.addEventListener("input", (event) => {
  let tempSliderValue = event.target.value;
  sliderValue.textContent = tempSliderValue;

  let progress = (tempSliderValue / sliderEl.max) * 50;
  sliderValue.value = progress;
  sliderEl.style.background = `linear-gradient(to right, #f5 ${sliderValue.value}%, #ccc ${sliderValue.value}%)`;
});
let str =
  "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#_+-=[]{}|;:',.<>?/~`$%^&*()";
let userDisplay = document.querySelector("#userDisplay");
function passwordBtn() {
  userDisplay.value = "";
  for (let i = 0; i < uservalue.value; i++) {
    let randomNumber = Math.floor(Math.random() * str.length);
    userDisplay.value += str[randomNumber];
  }
}

function copyPassword() {
  let userDisplay = document.querySelector("#userDisplay");
  userDisplay.select();
  userDisplay.setSelectionRange(0, 99999);
  navigator.clipboard.writeText(userDisplay.value);
  Swal.fire({
    title: "Copied",
    text: "Copied the text: " + userDisplay.value,
    icon: "success",
  });
}
function Copyright() {
  let date = new Date();

  let footerCopyright = document.querySelector(".footer-copyright p ");
  footerCopyright.innerText = `© ${date.getFullYear()} Muhammad Fahad. All Rights Reserved.`;
}
Copyright();
