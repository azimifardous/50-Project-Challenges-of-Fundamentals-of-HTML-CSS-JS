const backgroundImage = document.querySelector(".bg");
const loadingEl = document.getElementById("loading");

let loadingProgress = 0;
let blurRatio = 100;
let opacity = 1;
let int = setInterval(blur, 30);

function blur() {
    loadingProgress++;
    blurRatio--;
    if (loadingProgress >= 100 || blurRatio <= 0) clearInterval(int);
    loadingEl.innerText = `${loadingProgress}%`;
    backgroundImage.style.filter = `blur(${blurRatio}px)`;
    loadingEl.style.opacity = scale(loadingProgress, 0, 100, 1, 0)
    // Infinite Tsukuyumi 😜
    if (loadingProgress === 100) location.reload()
}

const scale = (num, in_min, in_max, out_min, out_max) => {
    return (num - in_min) * (out_max - out_min) / (in_max - in_min) + out_min;
}