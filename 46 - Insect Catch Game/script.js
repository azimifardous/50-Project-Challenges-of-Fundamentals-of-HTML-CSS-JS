const screens = document.querySelectorAll(".screen");
const playBtn = document.getElementById("btn");
const insects = document.querySelectorAll(".choose-insect-btn");
const timeEl = document.getElementById("time");
const scoreEl = document.getElementById("score");
const messageEl = document.getElementById("message")
const gameContainer = document.querySelector(".game-container");
let seconds = 0;
let score = 0;
let selectedInsect = {};

// Play the game
playBtn.addEventListener("click", () => screens[0].classList.add("up"));

// Start the game with the selected insect
insects.forEach(insect => {
    insect.addEventListener("click", () => {
        const img = insect.querySelector("img");
        const src = img.getAttribute("src");
        const alt = img.getAttribute("alt");
        selectedInsect = { src, alt }
        screens[1].classList.add("up");
        setTimeout(createInsect, 1000);
        startGame()
    })
})

// Start the game and the timer
function startGame() {
    setInterval(timer, 1000)
}

function timer() {
    seconds++
    let m = Math.floor(seconds / 60);
    let s = seconds % 60;
    m = (m < 10) ? `0${m}` : m;
    s = (s < 10) ? `0${s}` : s;
    timeEl.innerHTML = `Time: ${m}:${s}`
}

// Creating the new insects
function createInsect() {
    const insect = document.createElement("div");
    insect.classList.add("insect");
    insect.innerHTML = `<img src="${selectedInsect.src}" alt="${selectedInsect.alt}" style="transform: rotate(${Math.random() * 360}deg)">`
    const { x, y } = getRandomPosition()
    insect.style.top = `${y}px`;
    insect.style.left = `${x}px`;
    insect.addEventListener("click", catchInsect)
    gameContainer.appendChild(insect)
}

// Creating random positions
function getRandomPosition() {
    const width = window.innerWidth;
    const height = window.innerHeight;
    const x = Math.random() * (width - 200) + 100;
    const y = Math.random() * (height - 200) + 100;
    return { x, y }

}

function catchInsect() {
    increaseScore()
    this.classList.add("cought")
    setTimeout(() => this.remove(), 2000)
    addMoreInsects()
}

function addMoreInsects() {
    setTimeout(createInsect, 1000)
    setTimeout(createInsect, 1500)
}

function increaseScore() {
    score++;
    if (score > 19) {
        messageEl.classList.add("visible")
    }
    scoreEl.innerHTML = `Score: ${score}`
}
