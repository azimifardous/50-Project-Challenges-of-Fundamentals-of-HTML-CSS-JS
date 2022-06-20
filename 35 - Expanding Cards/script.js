const cardDiv = document.querySelectorAll(".card");
cardDiv.forEach(card => {
    card.addEventListener("click", () => {
        removeExpandClasses(cardDiv)
        card.classList.toggle("expanded")
    })
})

function removeExpandClasses(cards) {
    cards.forEach(card => {
        card.classList.remove("expanded")
    })
}
