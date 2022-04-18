
// In here I grabbed all the necessary elements from my document using DOM and declared a variable for each
let tipBtn = document.querySelectorAll(".tip-btn");
let tipAmount = document.querySelector(".tip-amount");
let totalAmount = document.querySelector(".total");
let peopleNum = document.querySelector(".people-num");
let resetBtn = document.querySelector(".reset-btn");
let bill = document.querySelector(".bill");
let customBtn = document.querySelector(".custom-btn");
let isTipSelected = false;


// I set a function oninput of the bill variable, which is my bill input
bill.oninput = function billValue() {
    // Here the condition is, if the value of the input is empty return this string and write in where? in totalAmout.textContent 
    if (bill.value === "") {
        totalAmount.textContent = "$0.00"
    } // otherwise, if there's something written add it to the total.textContent
    else {
        totalAmount.textContent = "$" + bill.value
    }
    // Another function is set oninput of people number, which does the followings:
    peopleNum.oninput = function () {
        // if people number is 1, then return the bill value
        if (peopleNum.value === 1) {
            return totalAmount.textContent = "$" + bill.value
        } // else if people number is nothing/empty return 0.00 
        else if (peopleNum.value === "") {
            totalAmount.textContent = "$0.00"
        } // otherwise, do the following operation/evaluation
        else {
            totalAmount.textContent = "$" + (bill.value / peopleNum.value)
            tipAmount.textContent = "$0.00"
        }
    }

    // Since I grabbed all the tip buttons together as a string with QueryselectorAll, I have to write a forEach() function
    tipBtn.forEach((item) => {
        // When each item is clicked do this function, which is:
        item.addEventListener("click", function () {
            // Declared a new variable that should calculate the item value and bill value
            let resultTip = item.value * bill.value
            // if bill value (input value) is empty/nothing just simply return this string and write it on totalAmout.textContent
            if (bill.value === "") {
                return totalAmount.textContent = "$0.00"
            } // otherwise, do the following evaluation/operation 
            else {
                tipAmount.textContent = "$" + resultTip / peopleNum.value
                totalAmount.textContent = "$" + (resultTip + parseInt(bill.value, 10)) / peopleNum.value
            }
        })
    })

    // Since customBtn is an input, when it's clicked should turn the value of isTipSelected to true
    customBtn.addEventListener("click", function () {
        isTipSelected = true
    })
    // then, if customBtn's value is empty but/&& tip is selected (isTipSelected = true) it should return the simple value, it shouldn't do anything else 
    if (customBtn.value === "" && isTipSelected === true) {
        return totalAmount.textContent = "$" + bill.value
    } // but if that's not the case and actually customBtn's value is something, then it should do the following function 
    else {
        customBtn.oninput = function () {
            let customResult = ((customBtn.value * bill.value) / 100)
            tipAmount.textContent = "$" + customResult / peopleNum.value
            totalAmount.textContent = "$" + (customResult + parseInt(bill.value, 10)) / peopleNum.value
        }
    }

}


// Basically when the reset button is clicked, everything should be cleared.
resetBtn.onclick = function () {
    totalAmount.textContent = "$0.00"
    tipAmount.textContent = "$0.00"
    bill.value = ""
    customBtn.value = ""
    peopleNum.value = "1"
}

