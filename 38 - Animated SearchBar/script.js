const inputEl = document.getElementById("search");
const searchBarEl = document.querySelector(".searchbar");
const searchBtn = document.getElementById("btn");
let UserInputTxt = ""

searchBtn.addEventListener("click", () => {
    searchBarEl.classList.toggle("active")
})

inputEl.addEventListener(("input"), (e) => {
    UserInputTxt = e.target.value
})

inputEl.addEventListener(("keypress"), (event) => {
    if (event.key === "Enter") {
        window.open(`https://www.google.com/${UserInputTxt}`)
    }
})