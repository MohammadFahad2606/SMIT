let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordReg =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

let userEmail = document.querySelector("#user-email");
let userPassword = document.querySelector("#user-password");
let confirmPassword = document.querySelector("#confirm-password");

const loginPageRedirecr = () => {
  if (emailReg.test(userEmail.value) && passwordReg.test(userPassword.value)) {
    if (password.value === confrim_password.value) {
      window.location.href = "./login.html";
    } else {
      d.log("Password Not Matched / Please input confirm password");
    }
  } else {
    console.log("Password and Email Should follow the rules");
  }
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
