// Dark Mode - Light Mode
const themeTogglerBtn = document.getElementById("theme-toggler");
const dark = document.querySelector(".dark");
const light = document.querySelector(".light");

themeTogglerBtn.addEventListener("click", () => {
    dark.classList.toggle("hide")
    light.classList.toggle("hide");
    document.body.classList.toggle("darkmode")
})

// Getting Data from GitHub - Fetching API
let avatar,
    Name,
    username,
    createdDate,
    bio,
    repoNumber,
    follower,
    following,
    userLocation,
    githubBlog,
    twitter,
    githubHome;

async function requestData(username) {
    const API_URL = `https://api.github.com/users/${username}`
    const response = await fetch(API_URL);
    const data = await response.json();
    generateProfile(data)
    if (!response.ok) {
        showError()
    }
}


// Getting the user's searched input
const inputEl = document.getElementById("input-el");
const searchBtn = document.getElementById("search");
inputEl.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && inputEl.value !== "") {
        requestData(inputEl.value.toLowerCase())
        inputEl.value = ""
    }
})

searchBtn.addEventListener("click", () => {
    if (inputEl.value !== "") {
        requestData(inputEl.value.toLowerCase())
        inputEl.value = ""
    }
})

// generate user's profile
const userInfoDiv = document.querySelector(".user-info");
function generateProfile(data) {
    userInfoDiv.classList.remove("hide")
    fetchData(data)
    renderUserId()
    renderBio()
    renderRope()
    renderLocation()
}


function fetchData(data) {
    avatar = data.avatar_url
    Name = data.name;
    username = data.login;
    createdDate = data.created_at;
    bio = data.bio;
    repoNumber = data.public_repos;
    follower = data.followers;
    following = data.following;
    userLocation = data.location;
    githubBlog = data.blog;
    twitter = data.twitter_username;
    githubHome = data.html_url;
}

function renderUserId() {
    // Converting the date
    const date = new Date(createdDate)
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    const day = date.getDate()
    const month = months[date.getMonth()];
    const year = date.getFullYear();

    userInfoDiv.innerHTML = `
    <div class="user-id">
       <img src="${avatar}" class="user-avatar">
       <div class="id">
           <h2>${Name}</h2>
           <a id="username" href="${githubHome}" target="_blank">@${username}</a>
           <span id="date">Joined ${day} ${month} ${year}</span>
       </div>
   </div>
   `
}

function renderBio() {
    userInfoDiv.innerHTML += `
    <div class="user-bio">${bio}</div>
    `
}

function renderRope() {
    userInfoDiv.innerHTML += `
    <div class="user-repo">
    <div class="repo">
        <span class="name">Repo</span>
        <span class="no">${repoNumber}</span>
    </div>
    <div class="followers">
        <span class="name">Followers</span>
        <span class="no">${follower}</span>
    </div>
    <div class="following">
        <span class="name">Following</span>
        <span class="no">${following}</span>
    </div>
</div>
    `
}

function renderLocation() {
    if (!githubBlog) {
        githubBlog = "Not available"
    }

    if (!userLocation) {
        userLocation = "Hidden"
    }

    if (!twitter) {
        twitter = "Not available"
    }

    const blog = (githubBlog !== "Not available") ? "Blog" : "Not available";

    userInfoDiv.innerHTML += `
    <div class="user-location">
    <div>
        <a href="" target="_blank" class="location">
            <i class="fa-solid fa-location-dot"></i>
            ${userLocation}
        </a>
        <a id="blog" href="${githubBlog}" target="_blank">
            <i class="fa-solid fa-link"></i>
            ${blog}
        </a>
    </div>
    <div>
        <a href="https://www.twitter.com/${twitter}" target="_blank" id="twitter">
            <i class="fa-brands fa-twitter"></i>
            ${twitter}
        </a>
        <a href="${githubHome}" target="_blank">
            <i class="fa-solid fa-house"></i>
           @github
        </a>
    </div>
</div>
    `
    if (githubBlog === "Not available") {
        const blogEl = document.getElementById("blog")
        blogEl.classList.add("not-available");
        blogEl.style.cursor = "default"
        blogEl.removeAttribute("href")
    }

    if (twitter === "Not available") {
        const twitterEl = document.getElementById("twitter");
        twitterEl.classList.add("not-available");
        twitterEl.style.cursor = "default"
        twitterEl.removeAttribute("href")
    }
}

function showError() {
    userInfoDiv.innerHTML = `
        <div class="error">Ooops! There's no one by this username 😢</div>
    `
}