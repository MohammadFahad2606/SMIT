// var boxes = document.getElementById("boxes");
// document.write;
// for (var i = 0; i < 56; i++) {
//   var remember = i % 2;
//   if (remember == 0) {
//     boxes.innerHTML += `<div class='box' style='background-color: black;'></div>`;
//   } else {
//     boxes.innerHTML += `<div onclick="del(this)"class='box' style='background-color: white;'></div>`;
//   }
// }

// function del(e) {
//   e.style.display = 'none';
// }

var boxes = document.getElementById("boxes");
document.write;
for (var i = 0; i < 9; i++) {
  boxes.innerHTML += `<div onclick="tick(this) class='box' ></div>`;
}

// function tick(box) {
//   box.innerHTML = `<img src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fen.wikipedia.org%2Fwiki%2Ffile%3Atick.png&psig=AOvVaw2zR3yMz0eG1yV8IJMNB6_S&ust=1710585940720000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCOjhgKyL9oQDFQAAAAAdAAAAABAE"/>`;
// }
