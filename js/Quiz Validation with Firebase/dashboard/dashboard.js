import {
  signOut,
  onAuthStateChanged,
  auth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "../firebase.js";

let logoutBtn = document.getElementById("logoutBtn");

const logout = () => {
  // console.log(logoutBtn)

  signOut(auth)
    .then(() => {
      window.location.href = "../login/login.html";
    })
    .catch((error) => {
      alert(error);
    });
};

logoutBtn.addEventListener("click", logout);

onAuthStateChanged(auth, (user) => {
  if (user) {
    const uid = user.uid;
  } else {
    window.location.href = "../login/login.html";
  }
});
