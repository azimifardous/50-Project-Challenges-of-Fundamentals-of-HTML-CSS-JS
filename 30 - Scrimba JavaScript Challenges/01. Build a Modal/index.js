const openModal = document.getElementById("open-modal");

openModal.addEventListener("click", function () {
    document.getElementById("overlay").style.display = "block"
})

const closeModal = document.getElementById("close-modal");

closeModal.addEventListener("click", function () {
    document.getElementById("overlay").style.display = "none"
})