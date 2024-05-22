let main = document.getElementById("main");
const array = Array.from({ length: 54 }, (_, index) => index + 1);
// console.log(array);
for (let i = 1; i < array.length; i++) {
  main.innerHTML += `<div><img src = "cards img/${i}.jpg"/>
  
  <h4>Card:No ${i}</h4>
  </div>`;
}
