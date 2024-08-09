// JavaScript exercise

// 1. Write a JavaScript program to display the current day and time in the following format.
// Sample Output : Today is : Tuesday.
// Current time is : 10 PM : 30 : 38
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];

const currentDateTime = () => {
  let date = new Date();
  console.log("Today is :" + days[date.getDay()]);
  let horus = date.getHours();

  if (horus === 0) {
    horus = horus + 12 + "AM";
  } else {
    if (horus > 12 && horus <= 23) {
      horus = horus - 12 + " PM";
    } else {
      horus = horus + "AM";
    }
  }
  console.log(
    `Current time is :${horus} /${date.getMinutes()} /${date.getSeconds()}`
  );
};
currentDateTime();



