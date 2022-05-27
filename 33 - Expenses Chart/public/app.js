const bars = document.querySelectorAll(".bar");
bars.forEach(bar => {
    bar.addEventListener("mouseover", () => {
        bar.classList.add("active");
    })
    bar.addEventListener("mouseout", () => {
        bar.classList.remove("active");
    })
});

