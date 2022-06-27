const jokeDiv = document.getElementById("joke");
const getAnotherJokeBtn = document.getElementById("next-joke");

// Using async-await method to fetch an API
async function generateJoke() {
    const config = {
        headers: {
            Accept: 'application/json'
        }
    }
    const response = await fetch("https://icanhazdadjoke.com/", config);
    const data = await response.json();
    jokeDiv.innerHTML = data.joke

}
generateJoke()
getAnotherJokeBtn.addEventListener("click", generateJoke)
