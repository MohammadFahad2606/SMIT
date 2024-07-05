let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordReg =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let userEmail = document.querySelector("#user-email");
let userPassword = document.querySelector("#user-password");
let confirmPassword = document.querySelector("#confirm-password");
let emailVal = document.querySelector("#emailVal");
let passVal = document.querySelector("#passVal");
let cofpassVal = document.querySelector("#cofpassVal");

const loginPageRedirecr = () => {
  if (emailReg.test(userEmail.value)) {
  } else {
    emailVal.innerText = "Email Should follow the rules";
  }
  if (passwordReg.test(userPassword.value)) {
  } else {
    passVal.innerHTML = `<p>Your password must be have at least</p>
    <ul>
  <li>8 characters long</li>
  <li>1 uppercase &amp; 1 lowercase character</li>
  <li>1 number</li>
  </ul>`;
  }
  if (confirmPassword.value !== userPassword.value) {
    cofpassVal.innerText = "Password Not Matched";
  } else {
    // const userData = {
    //   Name: userName.value,
    //   email: userEmail.value,
    //   password: userPassword.value,
    // };
    // localStorage.setItem(Data, JSON.stringify(userData));
    window.location.href = "./dashboard.html";
  }

  // if (emailReg.test(userEmail.value) && passwordReg.test(userPassword.value)) {
  //   if (password.value === confrim_password.value) {
  //     window.location.href = "./login.html";
  //   } else {
  //     d.log("Password Not Matched / Please input confirm password");
  //   }
  // } else {
  //   console.log("Password and Email Should follow the rules");
  // }
};
const signupPageRedirecr = () => {
  window.location.href = "./Signup.html";
};
const dashboardRed = () => {
  window.location.href = "./dashboard.html";
};
const HomePage = () => {
  window.location.href = "./index.html";
};
