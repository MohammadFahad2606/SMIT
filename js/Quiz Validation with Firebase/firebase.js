import { initializeApp } from "https://www.gstatic.com/firebasejs/10.12.5/firebase-app.js";
import {
  signOut ,
  onAuthStateChanged ,
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "https://www.gstatic.com/firebasejs/10.12.5/firebase-auth.js";

const firebaseConfig = {
  apiKey: "AIzaSyAmXJIOGiaygTp6ZjYWVYgO-K-5ScsIQkY",
  authDomain: "smit-mf-dev.firebaseapp.com",
  projectId: "smit-mf-dev",
  storageBucket: "smit-mf-dev.appspot.com",
  messagingSenderId: "941052395379",
  appId: "1:941052395379:web:a40292f70b05c89b234f06",
  measurementId: "G-KVD8646YQC",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth (app);

export {signOut ,onAuthStateChanged , auth, createUserWithEmailAndPassword, signInWithEmailAndPassword };
