<<<<<<< HEAD
let cityname = document.querySelector("#search");
let searchBtn = document.querySelector("#searchbtn");
let apikey =
searchBtn.addEventListener("click", fetchdata);
function fetchdata() {
 fetch(`https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&appid=${apikey}`)



=======
const apicall = () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}`
       );};
>>>>>>> f879a1ebb35230c375cd73af30c78db94d15bff0


<<<<<<< HEAD
=======
async function getCruntDataApi(lat, lon) {
  try {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid={API key}`
    );
    let res = await data.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
>>>>>>> f879a1ebb35230c375cd73af30c78db94d15bff0
}

// const apicall = () => {
//   fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
// `);
// };

// // function getCurrentLocation() {
// //   navigator.geolocation.getCurrentPosition(
// //     (position) => {
// //       getCruntDataApi(position.coords.latitude, position.coords.longitude);
// //     },
// //     (error) => {
// //       alert(error.message);
// //     }
// //   );
// // }
// // getCurrentLocation();

// async function getCruntDataApi(lat, lon) {
//   try {
//     let data = await fetch(
//       `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fb763078c8af7fcd748f1e4f15057d46`
//     );
//     let res = await data.json();
//     console.log(res);
//   } catch (err) {
//     console.log(err);
//   }
// }
