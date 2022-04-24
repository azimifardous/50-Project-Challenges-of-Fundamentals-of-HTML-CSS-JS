// Let's Make Themes - for that we have to grab the needed elements
const ball = document.querySelector(".theme_ball");
const themeStage = document.querySelectorAll(".theme-item");
const totalStage = themeStage.length;
let currentStage = 0;

// Let's add a click eventListener on ball/toggler
ball.addEventListener("click", function () {
    // Check the current stage and increment it by one and store to the currentStage
    if (currentStage === totalStage - 1) {
        currentStage = 0
    } else {
        currentStage++;
    }

    /* Each time we click the ball the currentStage is going change to
        theme numbers and we have to write a conditional for each stage
    */
    if (currentStage === 1) {
        ball.style.transform = "translateX(20px)"
        document.body.classList.add("theme2")
        document.body.classList.remove("theme1")
        document.body.classList.remove("theme3")
    } else if (currentStage === 2) {
        ball.style.transform = "translateX(40px)"
        document.body.classList.add("theme3")
        document.body.classList.remove("theme2")
        document.body.classList.remove("theme1")
    } else {
        ball.style.transform = "translateX(0)"
        document.body.classList.add("theme1")
        document.body.classList.remove("theme2")
        document.body.classList.remove("theme3")

    }
})

// Let's ,make our calculator functional....! 🤩
// Let's grab all the numbers and buttons

const inputNumber = document.querySelector(".input");
const numbers = document.querySelectorAll(".number");
const deleteBtn = document.querySelector(".del");
const resetBtn = document.querySelector(".reset-btn");
const equalBtn = document.querySelector(".equal-btn");


numbers.forEach((item) => {
    item.addEventListener("click", function (e) {
        inputNumber.textContent += e.target.value
    })

})

equalBtn.addEventListener("click", function () {
    let sum = eval(inputNumber.textContent)
    inputNumber.textContent = roundOff(sum, 5)
})

resetBtn.addEventListener("click", function () {
    inputNumber.textContent = ""
})

deleteBtn.addEventListener("click", function () {
    inputNumber.textContent = inputNumber.textContent.slice(0, -1)
})

function roundOff(num, decimalPlaces = 0) {
    let p = Math.pow(10, decimalPlaces);
    return Math.round(num * p) / p;
}
