function userBtn() {
  let tableLength = document.querySelector("#tableLength");
  let tableNumber = document.querySelector("#tableNumber");
  let containerBox = document.querySelector("#containerBox");

  if (tableLength.value !== "" && tableLength.value !== "") {
    for (let i = 1; i <= tableLength.value; i++) {
      containerBox.innerHTML += `<h2><span>${
        tableNumber.value
      }</span> <span>x</span> <span>${i}</span> <span>=</span><span>${
        tableNumber.value * i
      }</span></h2>`;
    }
  } else {
    Swal.fire("Please Enter Table Number");
  }

  console.log(tableLength.value);
  console.log(tableNumber.value);
  tableLength.value = "";
  tableNumber.value = "";
}
