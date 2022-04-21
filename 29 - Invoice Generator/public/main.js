// Let's grab the buttons and elements
const washBtn = document.querySelector(".wash");
const lawnBtn = document.querySelector(".lawn");
const pullBtn = document.querySelector(".pull");
const total = document.querySelector(".total");
const resetBtn = document.querySelector(".reset");
const tasks = document.querySelector(".task-list-container");

// Let's make arraies to store the items and prices
let items = [];
let prices = [];


// Let's add a click event to listen for each click user does on buttons
washBtn.addEventListener("click", function () {
    // Push the Task and Price
    items.push("Wash Card")
    prices.push(10)
    // Invoke the function in order to display the task in the card
    renderTask(items, prices)

})


lawnBtn.addEventListener("click", function () {

    items.push("Mow Lawn")
    prices.push(20)
    renderTask(items, prices)

})

pullBtn.addEventListener("click", function () {

    items.push("Pull Weeds")
    prices.push(30)
    renderTask(items, prices)

})


// Reset Button (Send Invoice)
resetBtn.addEventListener("click", function () {
    // Let's clear everything back to normal
    items = []
    prices = []
    renderTask()
    total.textContent = "$0"
})


// Let's make functions for rendering/displaying each task when we call it.
function renderTask(task, cost) {
    let taskStr = ""
    let amount = 0.00;

    for (let i = 0; i < items.length; i++) {
        taskStr += `
        <div class="flex justify-between mt-4">
        <span class="text-lg font-bold">${task[i]}
            <button class="remove-btn text-xs text-gray-500 ml-2 hover:text-gray-400" onclick="removeItem(this.value)">Remove</button>
        </span>
        <span class="text-xl font-bold">$${cost[i]}</span>
        </div>
        `
        amount += cost[i]
    }

    tasks.innerHTML = taskStr
    total.textContent = `$${amount}`

}

// Removing items
function removeItem(item) {

    items.splice(item, 1);
    prices.splice(item, 1);
    renderTask(items, prices);

}