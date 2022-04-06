let num1 = 8
let num2 = 2
document.getElementById("num1-el").textContent = num1
document.getElementById("num2-el").textContent = num2

// Create four functions: add(), subtract(), divide(), multiply()
// Call the correct function when the user clicks on one of the buttons
// Perform the given calculation using num1 and num2
// Render the result of the calculation in the paragraph with id="sum-el"

// E.g. if the user clicks on the "Plus" button, you should render
// "Sum: 10" (since 8 + 2 = 10) inside the paragraph with id="sum-el"

// Defining a variable for getting that element
let sumup = document.getElementById("sum-el")

// Add Function 
function add() {

    let result = num1 + num2
    sumup.textContent = "Sum: " + result
}

// Subtract Function
function subtract() {
    let result = num1 - num2
    sumup.textContent = "Sum: " + result
}

// Multiply Function 
function multiply() {
    let result = num1 * num2
    sumup.textContent = "Sum: " + result
}

// Divide Funtion 
function divide() {
    let result = num1 / num2
    sumup.textContent = "Sum: " + result
}

let clearBtn = document.querySelector(".clear")
clearBtn.addEventListener("click", function() {
    sumup.textContent = "Sum: 0";
})

