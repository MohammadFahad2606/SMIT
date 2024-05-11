function userBtn() {
  let tableLength = document.querySelector("#tableLength").value;
  let tableNumber = document.querySelector("#tableNumber").value;
  let containerBox = document.querySelector("#containerBox");

  if (tableLength !== "" && tableLength !== "") {
    for (let i = 1; i <= tableLength; i++) {
      containerBox.innerHTML += `<h2><span>${tableNumber}</span> <span>x</span> <span>${i}</span> <span>=</span><span>${
        tableNumber * tableLength
      }</span></h2>`;
    }
  } else {
    Swal.fire("Please Enter Table Number");
  }
  console.log(tableLength);
  console.log(tableNumber);
  tableLength = "";
  tableNumber = "";
}
