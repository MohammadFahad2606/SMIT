let card = document.querySelector(".card");
let userInput = document.querySelector("#userInput");
let button = document.querySelector("#button");

function fetchAPI() {
  if (userInput.value.trim() === "") {
    card.innerHTML = `<h3 class="error">Input feild is empty</h3>`;
  } else {
    card.innerHTML = `<h3>loding...</h3>`;
    fetch(`https://api.github.com/users/${userInput.value}`)
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        // console.log(data);
        if (data.message === "Not Found") {
          card.innerHTML = `<h3 class="error">User not Found</h3>`;
        } else {
          showData(data);
        }
      })
      .catch((error) => {
        // console.log(error);
      });
    //   .catch((error) => {
    //     console.log(error);
    //     card.innerHTML = `<h3 class="error">User not Found</h3>`;
    //   });
  }

  userInput.value = "";
}

userInput.addEventListener("keyup", (e) => {
  if (e.key === "Enter") {
    fetchAPI();
  }
});

// fetchAPI();
button.addEventListener("click", fetchAPI);

function showData(data) {
  //   console.log(data);
  const { avatar_url, bio, following, followers, location, name, login } = data;
  card.innerHTML = `
    <img class="profile-img" src="${avatar_url}" alt="profile-image" />
    <h3>${name}</h3>
    <p>${login}</p>
    <p>
      ${bio}
    </p>

    <div class="wrapper">
      <ul>
        <li>
          <img src="./asset/user-logo.png" alt="" />${followers} followers
          <span>${following} following</span>
        </li>
        <li><img src="./asset/location-logo.png" alt="" />${location}</li>
      </ul>
    </div>`;
}
