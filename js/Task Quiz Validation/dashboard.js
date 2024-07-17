let dashboardImg = document.querySelector("#dashboardImg");
let dasBtn = document.querySelector("#dasBtn");

// Dashboard
const data = JSON.parse(localStorage.getItem("userData"));
const { email, password, Name, picture } = data;

let getDataDashboard = data.find((item) => {
  return item.islogin === true;
});

const dashboardPageRedirecr = () => {
  window.location.href = "./login.html";
  console.log("loginpage again");
};

if (!getDataDashboard) {
  console.log("loginpage");
  dashboardPageRedirecr();
}
dasBtn.innerText = getDataDashboard.Name;
if (!getDataDashboard.picture) {
  dashboardImg.src = "./asset/user_icon.png";
} else {
  dashboardImg.src = getDataDashboard.picture;
}

const logout = () => {
  console.log(getDataDashboard.islogin);
  getDataDashboard.islogin = false;
  console.log(getDataDashboard.islogin);
  localStorage.setItem("userData", JSON.stringify(data));

  window.location.href = "./index.html";
};
