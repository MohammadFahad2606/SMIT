// menubar
let menubarget = document.querySelector(".haderMenu");
let menuBarShow = false;
const menubar = () => {
  menuBarShow = !menuBarShow;
  if (menuBarShow) {
    menubarget.style.position = "relative";
    menubarget.style.transition = "0.2s";
    menubarget.style.marginTop = 0;
  } else {
    menubarget.style.marginTop = "-10rem";
    menubarget.style.position = "absolute";
    menubarget.style.transition = "0.2s";
    console.log(menuBarShow);
  }
};

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
const uploadImage = () => {
  let img = userPic.files[0];
  let fileRead = new FileReader();
  fileRead.onload = () => {
    imgUrl = fileRead.result;
    showPic.src = imgUrl;
  };
  fileRead.readAsDataURL(img);
  showPic.src = imgUrl;
};

//  Signup Function
//
//
let userArryData = JSON.parse(localStorage.getItem("userData")) || [];
const signup = () => {
  event.preventDefault();
  let existingEmail = userArryData.find((item) => {
    return item.email === userEmail.value;
  });
  // console.log(existingEmail);
  if (userName.value.trim() === "") {
    userNameValidation.innerText = "Name is required";
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
  if (userPassword.value === "") {
    userPasswordValidation.innerHTML = `<p>Please Enter a password</p>`;
  }
  if (!existingEmail) {
    if (confirmPassword.value !== "") {
      if (userPassword.value != confirmPassword.value) {
        confirmPasswordValidation.innerText = "Password Not Matched";
      } else {
        if (emailReg.test(userEmail.value) === !true) {
          userEmailValidation.innerText = "Please Enter a Valid Email Address";
        } else {
          let obj = {
            Name: userName.value,
            email: userEmail.value,
            password: userPassword.value,
            picture: imgUrl,
            role: "user",
            islogin: false,
          };

          userArryData.push(obj);

          // console.log(userPic);
          localStorage.setItem("userData", JSON.stringify(userArryData));
          console.log(userArryData);
          window.location.href = "./login.html";
        }
      }
    } else {
      confirmPasswordValidation.innerText = "Please Enter Confirm Password";
    }
  } else {
    userEmailValidation.innerText = "Existing Email Address";
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

let loginEye = document.getElementById(".loginEye");
let loginIsShow = false;
const loginShowPassword = () => {
  loginIsShow = !loginIsShow;
  // console.log(loginIsShow);
  if (loginIsShow) {
    loginPassword.type = "text";
    eye.classList.remove("fa-eye-slash");
    eye.classList.add("fa-eye");
  } else {
    loginPassword.type = "password";
    eye.classList.remove("fa-eye");
    eye.classList.add("fa-eye-slash");
  }
};

const login = () => {
  event.preventDefault();

  let getData = data.find((item) => {
    return item.email === loginEmail.value;
  });
  // console.log(getData.password);

  const removeLoginValidation = () => {
    loginEmailVal.innerText = "";
    loginPasswordVal.innerText = "";
  };
  if (loginEmail.value.trim() === "") {
    loginEmailVal.innerText = "Please Enter Your Email";
  }
  if (loginPassword.value.trim() === "") {
    loginPasswordVal.innerText = "Password Flied is Empty";
  }
  if (!getData) {
    loginEmailVal.innerText = "User Not Found";
  }
  setTimeout(() => {
    removeLoginValidation();
  }, 2000);
  if (loginPassword.value === getData.password) {
    // console.log(getData.islogin);
    getData.islogin = true;
    // console.log(getData.islogin);
    localStorage.setItem("userData", JSON.stringify(data));

    window.location.href = "./dashboard.html";
  } else {
    if (loginEmail.value.trim() === "") {
      loginEmailVal.innerText = "Please Enter Your Email";
    }
    if (loginPassword.value.trim() === "") {
      loginPasswordVal.innerText = "Password Flied is Empty";
    }
    loginPasswordVal.innerText = "Please check again Password ";
  }

  setTimeout(() => {
    removeLoginValidation();
  }, 2000);
};

let getDataDashboard = data.find((item) => {
  return item.islogin === true;
});

const pageRedirecrDashboard = () => {
  window.location.href = "./dashboard.html";
  console.log("loginpage");
};

if (getDataDashboard) {
  pageRedirecrDashboard();
}
