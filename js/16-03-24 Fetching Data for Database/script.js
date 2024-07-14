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

let mobilePhones = [
  {
    brand: "Apple",
    model: "iPhone 13",
    pic: "https://images.priceoye.pk/apple-iphone-13-pakistan-priceoye-198ir-500x500.webp",
    color: "Blue",
    price: 999,
  },
  {
    brand: "Apple",
    model:"iPhone 12",
    pic: "https://regen.pk/cdn/shop/products/iphone-12-pro-max-579677_9a41dcfe-6a04-4047-8661-3e667a83bd19.jpg?v=1674906984",
    color: "Red",
    price: 799,
  },
  {
    brand: "Apple",
    model: "iPhone SE",
    pic: "https://files.refurbed.com/ii/iphone-se-2020-1587013419.jpg",
    color: "Gold",
    price: 399,
  },
  {
    brand: "Apple",
    model: "iPhone 11",
    pic: "https://regen.pk/cdn/shop/files/REGEN-iPhone11-Backfront-Purple-Pakistan.png?v=1684752662",
    color: "Green",
    price: 699,
  },
  {
    brand: "Apple",
    model: "iPhone XR",
    pic: "https://www.mega.pk/items_images/Apple+iPhone+XR+4G+Mobile+3GB+RAM+128GB+Storage+Price+in+Pakistan%2C+Specifications%2C+Features_-_18394.webp",
    color: "White",
    price: 599,
  },
  {
    brand: "Apple",
    model: "iPhone 8",
    pic: "https://www.apple.com/newsroom/images/product/iphone/standard/8plus_and_8_glass_back_big.jpg.large.jpg",
    color: "Silver",
    price: 499,
  },
  {
    brand: "Samsung",
    model: "Galaxy S21",
    pic: "https://cdn.alloallo.media/catalog/product/samsung/galaxy-s/galaxy-s21/galaxy-s21-phantom-purple.jpg",
    color: "Black",
    price: 799,
  },
  {
    brand: "Samsung",
    model: "Galaxy Note 20",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQSg9AGLyqbJFxchY02gws7Oa1IxjvH8B7ppA&s",
    color: "Mystic Bronze",
    price: 899,
  },
  {
    brand: "Samsung",
    model: "Galaxy A52",
    pic: "https://asalbachat.com/wp-content/uploads/2021/11/Samsung-Galaxy-A52-Awesome-Violet-650x650-1.png",
    color: "Awesome Blue",
    price: 499,
  },
  {
    brand: "Google",
    model: "Pixel 6",
    pic: "https://mtech4u.com/cdn/shop/files/Screenshot2023-08-17145915.png?v=1692266693",
    color: "White",
    price: 699,
  },
  {
    brand: "Google",
    model: "Pixel 5a",
    pic: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-5a-5g.jpg",
    color: "Sorta Sage",
    price: 449,
  },
  {
    brand: "Google",
    model: "Pixel 4a",
    pic: "https://fdn2.gsmarena.com/vv/bigpic/google-pixel-4a.jpg",
    color: "Just Black",
    price: 349,
  },
  {
    brand: "OnePlus",
    model: "9 Pro",
    pic: "https://mtech4u.com/cdn/shop/products/oneplus-9-pro-1_1024x1024_crop_center.jpg?v=1680604574",
    color: "Morning Mist",
    price: 899,
  },
  {
    brand: "Xiaomi",
    model: "Mi 11 Ultra",
    pic: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSFg10sLoKOqucYOew3KjwyBCM2oq8MNLFSZQ&s",
    color: "Ceramic Black",
    price: 1199,
  },
];

// let name ="fawawWWRRshad"
// console.log(name.toLowerCase());
let searchValue = document.querySelector("#search");
let filtered
const searchProd =()=>{

  filtered = mobilePhones.filter((values)=>{
    return (values.model).toLowerCase() === (searchValue.value).toLowerCase()
  
  })
console.log(filtered);

  console.log(searchValue.value);
  searchValue.value = "";


}

let containerBox = document.getElementById("containerBox");
console.log(containerBox);
mobilePhones.forEach((values, index, arry) => {
  containerBox.innerHTML += `<div onclick="showProduct(this)" class="productBox">
    <img src= "${values.pic}"/>
 <div class="info">
 <h2>${values.model}</h2>
 <h4>${values.price} $</h4>
 <p>${values.color}</p>
 <button>Add to Cart</button>
 </div>
    </div>`;
});
// containerBox.innerHTML += `<div  onclick="showProduct(this)" class="productBox">
//     <img src= "https://store.storeimages.cdn-apple.com/4982/as-images.apple.com/is/iphone-card-40-iphone14-202209_FMT_WHH?wid=508&hei=472&fmt=p-jpg&qlt=95&.v=1693086370007"/>
//  <div class="info">
//  <h2>tile</h2>
//  <h4>15$</h4>
//  <p>sfsafsfary</p>
//  <button>Add to Cart</button>
//  </div>
//     </div>`;

// api;
// fetch("https://dummyjson.com/products")
//   .then((res) => res.json())
//   .then((json) => {
//     var products = json.products;

//     for (var i = 0; i < products.length; i++) {
//       containerBox.innerHTML += `<div  onclick="showProduct(this)" class="productBox">
//    <img src= "${products[i].images[0]}"/>
// <div class="info">
// <h2>${products[i].title}</h2>
// <h4>${products[i].price} $</h4>
// <p>${products[i].category}</p>
// <button>Add to Cart</button>
// </div>
//     </div>`;
//     }

//     function showProduct(div) {
//       // const newUrl = "http://127.0.0.1:5500/test.html";
//       // window.location.href = newUrl;
//       console.log("hello");
//     }
//   });
