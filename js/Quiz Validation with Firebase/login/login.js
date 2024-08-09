import {
  onAuthStateChanged,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase.js";

const loginvalue = document.querySelectorAll("form input");
const [loginEmail, loginPassword] = loginvalue;

// showPasswor

let eye = document.getElementById("eye");
let isShow = false;
const showPassword = () => {
  isShow = !isShow;
  if (isShow) {
    loginPassword.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    loginPassword.type = "password";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  }
};
eye.addEventListener("click", showPassword);

let loginBtn = document.getElementById("loginBtn");
// loginValidation

const loginValidation = document.querySelectorAll("form p");
const [loginEmailVal, loginPasswordVal] = loginValidation;
const login = () => {
  event.preventDefault();
  signInWithEmailAndPassword(auth, loginEmail.value, loginPassword.value)
    .then((userCredential) => {
      // Signed in
      const user = userCredential.user;
      alert( "login");
    })
    .catch((error) => {
      const errorCode = error.code;
      const errorMessage = error.message;
      loginEmailVal.innerHTML = errorMessage;
    });
};

loginBtn.addEventListener("click", login);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
    window.location.href = "../dashboard/dashboard.html";
  }
});
