let dashboardImg = document.querySelector("#dashboardImg");
let dasBtn = document.querySelector("#dasBtn");


// loaderScreen
let loader = document.querySelector("#loader");
let loaderScreen = document.querySelector("#loaderScreen");

// Dashboard
const data = JSON.parse(localStorage.getItem("userData"));
const { email, password, Name, picture } = data;

let getDataDashboard = data.find((item) => {
  return item.islogin === true;
});
// console.log(getDataDashboard)

// const dashboardPageRedirecr = () => {
//   //   window.location.href = "./login.html";
//   //   console.log("loginpage again");
// };

if (!getDataDashboard) {
  dashboardPageRedirecr();
}
dasBtn.innerText = getDataDashboard.Name;
if (!getDataDashboard.picture) {
  dashboardImg.src = "./asset/user_icon.png";
} else {
  dashboardImg.src = getDataDashboard.picture;
}

const logout = () => {

  getDataDashboard.islogin = false;
 
  localStorage.setItem("userData", JSON.stringify(data));
  loaderScreen.classList.add("loaderScreen");
  loader.classList.add("loader");
  setTimeout(() => {
    window.location.href = "./index.html";
    loaderScreen.classList.remove("loaderScreen");
    loader.classList.remove("loader");
  }, 2000);
  
};
let dashboard = document.querySelector("#dashboardshow");
let dashboardHeading = document.querySelector("#dashboard h1");

dashboardHeading.innerHTML = `Welcome ${getDataDashboard.Name}`;
data.forEach((element, index) => {


  if (getDataDashboard.role === "admin") {
   
    dashboard.innerHTML += ` <ul>${index + 1})
      <ul>Name : ${element.Name}</ul>
      <ul>Role : ${element.role}</ul>
      <ul>Password : ${element.password}</ul>
      <ul>Email : ${element.email}</ul>
      </ul>`;
  } else {
    dashboardHeading.innerHTML = `Welcome ${getDataDashboard.Name}`;
  }
});
