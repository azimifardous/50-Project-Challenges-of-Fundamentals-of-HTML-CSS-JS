
// Dark Mode
let checkBox = document.querySelector("#checkbox");

checkBox.onclick = function darkMode() {
    document.body.classList.toggle("darkmode")
}

// Generator
// Defining all letters including numbers, symbols, lowercase and uppercase letters inside one variable in an array
let characters = ["A", "B", "C", "D", "E", "F",
    "G", "H", "I", "J", "K", "L", "M", "N", "O", "P",
    "Q", "R", "S", "T", "U", "V", "X", "Y", "Z", "a",
    "b", "c", "d", "e", "f", "g", "h", "i", "j", "k",
    "l", "m", "n", "o", "p", "q", "r", "s", "t", "u",
    "v", "x", "y", "z", "0", "1", "2", "3", "4", "5",
    "6", "7", "8", "9", "!", "@", "#", "$", "%", "^",
    "&", "*", "_"];

// Getting all elements using queryselectors and storing them in variables
let generateBtn = document.querySelector(".pass-btn");
let length = document.querySelector("#length");
let pass01 = document.querySelector(".pass1");
let pass02 = document.querySelector(".pass2");
let pass03 = document.querySelector(".pass3");
let pass04 = document.querySelector(".pass4");
let Inp = document.querySelectorAll(".input");
let copyTxt = document.querySelector(".copied");

// Making an onclick function for generate password button
generateBtn.onclick = function generatePass() {
    pass01.value = getPassword()
    pass02.value = getPassword()
    pass03.value = getPassword()
    pass04.value = getPassword()
}

// Making a function for selecting characters randomly
function randomPass() {
    let random = Math.floor(Math.random() * 69)
    return characters[random]
}

// Making a function for generating the password and return its value
function getPassword() {
    let pass = ""
    let value = ""
    for (let i = 0; i < length.value; i++) {
        value = randomPass()
        pass += value
    }
    return pass
}

// Copy Message
Inp.forEach((item) => {
    item.addEventListener("click", function () {
        item.select()
        document.execCommand("Copy")
        copyTxt.classList.toggle("active")
        setTimeout(function () {
            copyTxt.classList.remove("active")
        }, 800)
    })
})
