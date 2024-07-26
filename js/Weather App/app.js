const apicall = () => {
  fetch(`https://api.openweathermap.org/data/2.5/weather?lat={lat}&lon={lon}&appid={API key}
`);
};

// function getCurrentLocation() {
//   navigator.geolocation.getCurrentPosition(
//     (position) => {
//       getCruntDataApi(position.coords.latitude, position.coords.longitude);
//     },
//     (error) => {
//       alert(error.message);
//     }
//   );
// }
// getCurrentLocation();

async function getCruntDataApi(lat, lon) {
  try {
    let data = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=fb763078c8af7fcd748f1e4f15057d46`
    );
    let res = await data.json();
    console.log(res);
  } catch (err) {
    console.log(err);
  }
}
