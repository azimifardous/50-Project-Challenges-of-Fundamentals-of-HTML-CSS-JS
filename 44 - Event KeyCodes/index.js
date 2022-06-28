const pressInfoEl = document.getElementById("press-info");
const eventDivs = document.querySelectorAll(".event");
const keyCodeEl = document.getElementById("key-code");
const codeEl = document.getElementById("code");
const keyEl = document.getElementById("key");

window.addEventListener("keydown", (event) => {
    pressInfoEl.classList.add("hide");
    eventDivs.forEach(eventDiv => eventDiv.classList.remove("hide"))
    keyCodeEl.textContent = event.keyCode;
    keyEl.textContent = (event.key === " ") ? "Space" : event.key;
    codeEl.textContent = event.code;
})

