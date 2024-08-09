import {onAuthStateChanged, auth, createUserWithEmailAndPassword } from "../firebase.js";

// loader

// add class and loader is work
let loader = document.querySelector("#loader");
let loaderScreen = document.querySelector("#loaderScreen");

const loaderAdd = () => {
  loaderScreen.classList.add("loaderScreen");
  loader.classList.add("loader");
};
const loaderRemove = () => {
  loaderScreen.classList.remove("loaderScreen");
  loader.classList.remove("loader");
};

// removeValidation


const removeValidation = () => {
  userEmailValidation.innerText = "";
  userPasswordValidation.innerText = "";
  confirmPasswordValidation.innerText = "";
};
const removeValidationText = () => {
  
  setTimeout(() => {
    removeValidation();
  }, 2000);
};






// // // // // GetformFeild value
let validation = document.querySelectorAll("form p");
const [userEmailValidation, userPasswordValidation, confirmPasswordValidation] =
  validation;

let signupBtn = document.getElementById("signup-btn");
let formFeild = document.querySelectorAll("form input");
const [userEmail, userPassword, confirmPassword] = formFeild;

// signupBtn
const signUp = () => {
  event.preventDefault();

  if (userEmail.value.trim() === "") {
    userEmailValidation.innerHTML = "input feild is empty";
    removeValidationText()
  } else if (userPassword.value.trim() === "") {
    userPasswordValidation.innerHTML = "input feild is empty";
    removeValidationText()
  } else if (confirmPassword.value.trim() === "") {
    confirmPasswordValidation.innerHTML = "input feild is empty";
    removeValidationText()
  } else {
    if (userPassword.value === confirmPassword.value) {
      loaderAdd();
      createUserWithEmailAndPassword(auth, userEmail.value, userPassword.value)
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          window.location.href ="../login/login.html"
          loaderRemove();
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          if(errorMessage === "Firebase: Password should be at least 6 characters (auth/weak-password)."){
            userPasswordValidation.innerHTML = "Password should be at least 6 characters";
            removeValidationText()
          loaderRemove();
          }else{
            userEmailValidation.innerHTML = errorMessage;
          removeValidationText()
          loaderRemove();
          }
          
        });
    } else {
      userPasswordValidation.innerHTML = "Password Not machted";
      confirmPasswordValidation.innerHTML = "Password Not machted";
      removeValidationText()
    }
  }
};
signupBtn.addEventListener("click", signUp);

// showPasswor

let eye = document.getElementById("eye");
let isShow = false;
const showPassword = () => {
  isShow = !isShow;
  if (isShow) {
    (userPassword.type = "text") && (confirmPassword.type = "test");
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    (userPassword.type = "password") && (confirmPassword.type = "password");
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  }
};
eye.addEventListener("click", showPassword);



onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
   window.location.href = "../dashboard/dashboard.html"
  } 
});