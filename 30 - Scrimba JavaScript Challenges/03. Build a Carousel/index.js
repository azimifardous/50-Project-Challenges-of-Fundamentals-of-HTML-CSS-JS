const slides = document.getElementsByClassName("carousel-item");
const totalSlides = slides.length
const prevBtn = document.getElementById("carousel-btn-prev");
const nextBtn = document.getElementById("carousel-btn-next");
const circles = document.getElementsByClassName("circle");
const totalCircles = circles.length;


let slidePosition = 0;
let circlePosition = 0;

prevBtn.addEventListener("click", moveToPrevSlide);
nextBtn.addEventListener("click", moveToNextSlide);

function moveToNextSlide() {
    hideAllSlides()
    if (slidePosition === totalSlides - 1) {
        slidePosition = 0
    } else {
        slidePosition++;
    }

    if (circlePosition === totalCircles - 1) {
        circlePosition = 0
    } else {
        circlePosition++;
    }

    slides[slidePosition].classList.add("carousel-item-visible")
    circles[circlePosition].classList.add("active")
}

function moveToPrevSlide() {
    hideAllSlides()

    if (slidePosition === 0) {
        slidePosition = totalSlides - 1
    } else {
        slidePosition--;
    }

    if (circlePosition === 0) {
        circlePosition = totalCircles - 1
    } else {
        circlePosition--;
    }

    slides[slidePosition].classList.add("carousel-item-visible")
    circles[circlePosition].classList.add("active")
}


function hideAllSlides() {
    for (let slide of slides) {
        slide.classList.remove("carousel-item-visible")
        slide.classList.add("carousel-item-hidden")

    }

    for (let circle of circles) {
        circle.classList.remove("active")
        circle.classList.add("deactive")
    }
}



