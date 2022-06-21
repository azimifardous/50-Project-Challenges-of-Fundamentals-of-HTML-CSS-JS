const prevBtn = document.getElementById("prev");
const nextBtn = document.getElementById("next");
const progressBar = document.getElementById("progress");
const circles = document.querySelectorAll(".circle");

let currentActive = 1;

nextBtn.addEventListener("click", () => {
    currentActive++;
    if (currentActive > circles.length)
        currentActive = circles.length;
    updateCurrentStep()
});

prevBtn.addEventListener("click", () => {
    currentActive--;
    if (currentActive < 1) currentActive = 1;
    updateCurrentStep()
})

function updateCurrentStep() {
    prevBtn.removeAttribute("disabled")
    circles.forEach((circle, index) => {
        if (index < currentActive) {
            circle.classList.add("active")
        } else {
            circle.classList.remove("active")
        }
    })
    const actives = document.querySelectorAll(".active");
    progressBar.style.width = `${(actives.length - 1) / (circles.length - 1) * 100}%`;

    if (currentActive === 1) {
        prevBtn.disabled = true
    } else if (currentActive === circles.length) {
        nextBtn.disabled = true
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false
    }


}