let count = 0;
let countEl = document.getElementById("count-el");
let savePeople = document.getElementById("prepeople");
function increment() {
    count++
    countEl.innerText = count
}
function decrement() {
    count--
    countEl.innerText = count
}

function save() {
    saveStr = count + " - "
    savePeople.textContent += saveStr
    countEl.innerText = 0
    count = 0
}

