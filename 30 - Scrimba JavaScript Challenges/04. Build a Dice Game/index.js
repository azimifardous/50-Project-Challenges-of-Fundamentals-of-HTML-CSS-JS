// Let's create variables for the game state
let player1Score = 0;
let player2Score = 0;
let player1Turn = false;


// Let's create variables to store the necessary elements and buttons
const player1Dice = document.getElementById("player1Dice");
const player2Dice = document.getElementById("player2Dice");
const player1Scoreboard = document.getElementById("player1Scoreboard");
const player2Scoreboard = document.getElementById("player2Scoreboard");
const message = document.getElementById("message");
const rollBtn = document.getElementById("rollBtn");
const resetBtn = document.getElementById("resetBtn");

/* Let's add click eventListener to the roll button 
that should execute random number between 1 and 6 */
rollBtn.addEventListener("click", function () {
    const randomNumber = Math.floor((Math.random() * 6) + 1);

    // Let's find out which player turn it is
    if (player1Turn === true) {
        player1Score += randomNumber
        player1Scoreboard.textContent = player1Score
        message.textContent = "Player 1 Turn"
        player1Dice.textContent = randomNumber
        player1Dice.classList.add("active")
        player2Dice.classList.remove("active")
    } else {
        player2Score += randomNumber
        player2Scoreboard.textContent = player2Score
        message.textContent = "Player 2 Turn"
        player2Dice.textContent = randomNumber
        player2Dice.classList.add("active")
        player1Dice.classList.remove("active")
    }

    // Let's verify the winner 
    if (player1Score >= 20) {
        message.textContent = "Player 1 has won! 🥳"
        appearBtn()
    } else if (player2Score >= 20) {
        message.textContent = "Player 2 has won! 🥳"
        appearBtn()
    }

    // Let's switch the turn between player 1 and player 2
    player1Turn = !player1Turn
})


// Let's make a function for appearing the reset btn
function appearBtn() {
    rollBtn.style.display = "none"
    resetBtn.style.display = "block"
}

// Let's add a click eventListener to resetBtn to reset the game
resetBtn.addEventListener("click", function () {
    reset()
    rollBtn.style.display = "block"
    resetBtn.style.display = "none"
})

function reset() {
    player1Score = 0
    player2Score = 0
    player1Turn = false
    message.textContent = "Player 💁‍♂️ Turn"
    player1Dice.textContent = "-"
    player2Dice.textContent = "-"
    player1Scoreboard.textContent = player1Score
    player2Scoreboard.textContent = player2Score
    player1Dice.classList.remove("active")
    player2Dice.classList.remove("active")
}