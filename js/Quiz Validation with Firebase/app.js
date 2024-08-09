import {onAuthStateChanged, auth, createUserWithEmailAndPassword } from "./firebase.js";



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
  }
};
let loader = document.querySelector("#loader");
let loaderScreen = document.querySelector("#loaderScreen");
let menuBar = document.querySelector(".menubar");
menuBar.addEventListener("click", menubar);



onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
   window.location.href = "./dashboard/dashboard.html"
  } 
});

// // // // // Regex

// let emailReg = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/;
// let passwordReg =
//   /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
