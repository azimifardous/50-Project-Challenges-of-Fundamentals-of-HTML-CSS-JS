// Make an array for storing emojies
const myEmojies = ["👨‍💻", "⛷", "🍲"];
const emojiContainer = document.getElementById("emoji-container");
const emojiInput = document.getElementById("emoji-input");
const pushBtn = document.getElementById("push-btn");
const unshiftBtn = document.getElementById("unshift-btn");
const popBtn = document.getElementById("pop-btn");
const shiftBtn = document.getElementById("shift-btn");

function renderEmoji() {
    emojiContainer.innerHTML = ""
    for (let i = 0; i < myEmojies.length; i++) {
        const emoji = document.createElement("span")
        emoji.textContent = myEmojies[i]
        emojiContainer.append(emoji)
    }

}

renderEmoji()

pushBtn.addEventListener("click", function () {
    if (emojiInput.value) {
        myEmojies.push(emojiInput.value)
        emojiInput.value = ""
        renderEmoji()
    }
})


unshiftBtn.addEventListener("click", function () {
    if (emojiInput.value) {
        myEmojies.unshift(emojiInput.value)
        emojiInput.value = ""
        renderEmoji()
    }
})


popBtn.addEventListener("click", function () {
    myEmojies.pop()
    renderEmoji()

})


shiftBtn.addEventListener("click", function () {
    myEmojies.shift()
    renderEmoji()
})