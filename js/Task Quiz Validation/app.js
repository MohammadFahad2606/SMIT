// // // // // Regex

let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
let passwordReg =
  /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;

// // // // // GetformFeild value

let imgUrl;
let formFeild = document.querySelectorAll("form input");
const [userName, userEmail, userPassword, confirmPassword, userPic] = formFeild;

// validation Error Id get

let validation = document.querySelectorAll("form p");
const [
  userNameValidation,
  userEmailValidation,
  userPasswordValidation,
  confirmPasswordValidation,
  userPicValidation,
] = validation;

// // // uploadImage

let showPic = document.querySelector("#profiepic");
// let showPicDiv = document.querySelector(".showPic");
// console.log(showPic.src);
const uploadImage = () => {
  let img = userPic.files[0];
  let fileRead = new FileReader();
  fileRead.onload = () => {
    imgUrl = fileRead.result;
    showPic.src = imgUrl;
  };
  fileRead.readAsDataURL(img);
  // showPicDiv.style.display = "block"
  showPic.src = imgUrl;
};

const homePage = () => {
  console.log("home");
  window.location.href = "./index.html";
};

// // //  Signup Function
//
const signup = () => {
  event.preventDefault();

  if (userName.value.trim() === "") {
    userNameValidation.innerText = "Name is required";
  } else {
  }

  if (emailReg.test(userEmail.value) === true) {
    if (passwordReg.test(userPassword.value) === true) {
    } else {
      userPasswordValidation.innerHTML = `<p>Your password must be have at least</p>
      <ul>
    <li>8 characters long</li>
    <li>1 uppercase &amp; 1 lowercase character</li>
    <li>1 number</li>
    </ul>`;
    }
    
  } else {
    userEmailValidation.innerText = "Please Enter a Valid Email Address";
  }
  if(userPassword.value === "") {
    userPasswordValidation.innerHTML = `<p>Please Enter a password</p>`;
  }
 

  if (confirmPassword.value !== "") {
    if (userPassword.value != confirmPassword.value) {
      confirmPasswordValidation.innerText = "Password Not Matched";
    } else {
      const userData = {
        Name: userName.value,
        email: userEmail.value,
        password: userPassword.value,
        picture: imgUrl,
      };

      // console.log(userPic);
      localStorage.setItem("userData", JSON.stringify(userData));
      window.location.href = "./login.html";
    }
  } else {
    confirmPasswordValidation.innerText = "Please Enter Confirm Password";
  }

  if (
    userNameValidation.innerText != "" ||
    userEmailValidation.innerText != "" ||
    userPasswordValidation.innerText != "" ||
    confirmPasswordValidation.innerText != ""
  ) {
    setTimeout(() => {
      removeValidation();
    }, 2000);
  }
};

// removeValidation

const removeValidation = () => {
  userNameValidation.innerText = "";
  userEmailValidation.innerText = "";
  userPasswordValidation.innerText = "";
  confirmPasswordValidation.innerText = "";
};

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
const signupPageRedirecr = () => {
  window.location.href = "./Signup.html";
};
const loginPageRedirecr = () => {
  window.location.href = "./login.html";
};

// loginFrom

// login value get

const loginvalue = document.querySelectorAll("#loginForm input");
const [loginEmail, loginPassword] = loginvalue;

// loginValidation

const loginValidation = document.querySelectorAll("#loginForm p");
const [loginEmailVal, loginPasswordVal] = loginValidation;

// localStorage get

const data = JSON.parse(localStorage.getItem("userData"));
const { email, password, Name, picture } = data;

// login

const login = () => {
  event.preventDefault();

  if (loginEmail.value.trim() === "") {
    loginEmailVal.innerText = "Please Enter Email";
  }
  if (loginPassword.value.trim() === "") {
    loginPasswordVal.innerText = "Please Enter Password";
  }
  if (loginEmail.value === email && loginPassword.value === password) {
    window.location.href = "./dashboard.html";
  } else if (loginEmail.value !== email && loginPassword.value !== password) {
    loginEmailVal.innerText = "No user found with matching email";
  } else {
    loginPasswordVal.innerText =
      "The password that you've entered is incorrect.";
  }
};

let dashboardImg = document.querySelector("#dashboardImg");
let dasBtn = document.querySelector("#dasBtn");
// Dashboard
dasBtn.innerText = Name;
dashboardImg.src = picture;

const logout = () => {
  localStorage.clear();
  window.location.href = "./index.html";
};
