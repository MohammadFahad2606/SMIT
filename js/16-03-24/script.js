// var imgUrl =
//   "https://mobileguru.pk/wp-content/uploads/2023/08/apple-iphone-14-pro-max.jpg";
// var products = [];

// for (var i = 0; i < 100; i++) {
//   products.push({
//     id: 3,
//     title: "Iphone 14",
//     price: 90000,
//     category: "Mobile",
//     images: imgUrl,
//   });
// }

// local;
// onclick = "showProduct(id)";
// var containerBox = document.getElementById("containerBox");

// for (var i = 0; i < products.length; i++) {
//   containerBox.innerHTML += `<div onclick="showProduct(this)" class="productBox">
// <img src= "${products[0].images}"/>
// <div class="info">
// <h2>${products[i].title}</h2>
// <h4>${products[i].price} $</h4>
// <p>${products[i].category}</p>
// <button>Add to Cart</button>
// </div>
// </div>
// `;
// }

// function showProduct(div) {
//   console.log(div);
//   // const newUrl = "http://127.0.0.1:5500/test.html#";
//   // window.location.href = newUrl;
//   return { div };
//   console.log(div);
// }

// var containerPro = document.getElementById("containerPro");

// api;
var containerBox = document.getElementById("containerBox");

fetch("https://dummyjson.com/products")
  .then((res) => res.json())
  .then((json) => {
    var products = json.products;

    for (var i = 0; i < products.length; i++) {
      containerBox.innerHTML += `<div  onclick="showProduct(this)" class="productBox">
   <img src= "${products[i].images[0]}"/>
<div class="info">
<h2>${products[i].title}</h2>
<h4>${products[i].price} $</h4>
<p>${products[i].category}</p>
<button>Add to Cart</button>
</div>
    </div>`;
    }

    function showProduct(div) {
      // const newUrl = "http://127.0.0.1:5500/test.html";
      // window.location.href = newUrl;
      console.log("hello");
    }
  });
