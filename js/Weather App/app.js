let cityname = document.querySelector("#search");
let searchBtn = document.querySelector("#searchbtn");
let leftRow = document.querySelector(".row-wrapper");
let highlightBox = document.querySelector(".highlight-box-wrapper");
let locationBtn = document.querySelector(".locationBtn");
let apikey = "fb763078c8af7fcd748f1e4f15057d46";
// let geoCoordsKarachi = [24.9056, 67.0822];

locationBtn.addEventListener("click", () => {
  navigator.geolocation.getCurrentPosition((position) => {
    let latitude = position.coords.latitude;
    let longitude = position.coords.longitude;
    // dailyForecastData(latitude, longitude);
    currentWeatherData(latitude, longitude);
  });
});

// function dailyForecastData not work API not respouns

// function dailyForecastData(latitude, longitude) {
//   console.log(latitude, longitude);
//   // api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}
//   fetch(
//     `https://api.openweathermap.org/data/3.0/onecall?lat=33.44&lon=-94.04&exclude=hourly,daily&appid={apikey}`
//   )
//     .then((res) => {
//       // console.log(res);
//       return res.json();
//     })
//     .then((data) => {
//       console.log(data);
//     })
//     .catch((error) => {
//       console.log(error);
//       // alert(error);
//     });
// }

function currentWeatherData(latitude, longitude) {
  // console.log(latitude, longitude);
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&units=metric&appid=${apikey}`
  )
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      showdata(data);
    })
    .catch((error) => {
      alert(error);
    });
}

function fetchdata() {
  if (cityname.value.trim() === "") {
    alert("input Feid is Empty");
  } else {
    fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${cityname.value}&units=metric&appid=${apikey}`
    )
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        showdata(data);
      })
      .catch((error) => {
        alert(error);
      });
  }
  cityname.value = "";
}

function showdata(data) {
  const { name } = data;
  const { country } = data.sys;
  const { temp } = data.main;
  let updatedTemp = Math.floor(temp);
  let { main, id } = data.weather[0];
  let urlImg;

  if (id >= 200 && id <= 232) {
    urlImg = "./asset/imgs/scattered-thunderstorms.svg";
  } else if (id >= 300 && id <= 321) {
    urlImg = "./asset/imgs/drizzle.svg";
  } else if (id >= 500 && id <= 531) {
    urlImg = "./asset/imgs/rain.svg";
  } else if (id >= 600 && id <= 622) {
    urlImg = "./asset/imgs/snow.svg";
  } else if (id >= 701 && id <= 781) {
    urlImg = "./asset/imgs/cloudy.svg";
  } else if (id >= 801 && id <= 804) {
    urlImg = "./asset/imgs/clouds.svg";
  } else {
    urlImg = "./asset/imgs/sun.svg";
  }
  leftRow.innerHTML = `<img class="weather-icon" src="${urlImg}" />
          <h1>${updatedTemp}<sup>ºC</sup></h1>
          <h4>${name},${country}</h4>
          <ul>
            <li><i class="bx bx-cloud"></i>${main}</li>
          </ul>`;
  highlightBox.innerHTML = `<div class="highlight-box">
              <h5>Wind Status</h5>
              <h1>${data.wind.speed} <sup>km/h</sup></h1>
              <h3>${data.wind.deg} <sup>Deg</sup></h3>
            </div>
            <div class="highlight-box">
              <h5>Sunrise & Sunset</h5>
              <h3><i class='bx bxs-up-arrow'></i>${data.sys.sunrise}</h3>
              <h3><i class='bx bxs-down-arrow'></i>${data.sys.sunset}</h3>
            </div>
            <div class="highlight-box">
              <h5>Temp Max & Min</h5>
              <h3>Max ${data.main.temp_max}</h3>
              <h3>Min ${data.main.temp_min}</h3>
            </div>
             <div class="highlight-box">
              <h5>Humidity</h5>
              <h1><i class='bx bx-water'></i> ${data.main.humidity}</h1>
            </div>
             <div class="highlight-box">
              <h5>Sea Level</h5>
              <h1>${data.main.sea_level}</h1>
            </div>
             </div>
             <div class="highlight-box">
              <h5>Feels Like</h5>
              <h1>${data.main.feels_like}<sup>ºC</sup></h1>
            </div>`;
}

searchBtn.addEventListener("click", fetchdata);
cityname.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    fetchdata();
  }
});
