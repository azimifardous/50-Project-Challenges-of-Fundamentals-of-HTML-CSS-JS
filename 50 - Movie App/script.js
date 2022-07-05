// Fetching APIs Part
const SEARCH_API = "https://api.themoviedb.org/3/search/movie?&api_key=5fdc5fa2d0ee49806a3aa96d23971c45&query=";
const API_URL = "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=5fdc5fa2d0ee49806a3aa96d23971c45";
const IMAGE_PATH = "https://image.tmdb.org/t/p/w1280";

async function getData(url) {
    const response = await fetch(url);
    if (response.ok) {
        const data = await response.json();
        for (let i = 0; i < data.results.length; i++) {
            renderMovieCard(data.results[i])
        }
    }
}

getData(API_URL)

const searchQueryEl = document.getElementById("search-el");
searchQueryEl.addEventListener("keypress", (event) => {
    if (event.key === "Enter" && searchQueryEl.value !== "") {
        cardsContainer.innerHTML = "" // remove all the existing cards to add the new ones like 20 cards each time
        getData(SEARCH_API + searchQueryEl.value)
        searchQueryEl.value = ""
    }
})

const cardsContainer = document.querySelector(".cards-container");
function renderMovieCard(data) {
    const { title, poster_path, release_date, overview, vote_average } = data // desturing the objects
    const cardDiv = document.createElement("div");
    cardDiv.classList.add("card");
    let poster = poster_path === null ? "Image Not Found" : `<img src="${IMAGE_PATH + poster_path}"}>`;
    cardDiv.innerHTML = `
        <div class="poster">${poster}</div>
            <div class="details">
                <h2>${title} <br> <span class="rating">${vote_average}</span><span class="release-date">${release_date}</span></h2>
                    <div class="info"> 
                        <p>${overview}</p>
                </div>
            </div>
        </div>
        `
    cardsContainer.appendChild(cardDiv)
}


// Refreshing the page
function refresh() {
    location.reload()
} 