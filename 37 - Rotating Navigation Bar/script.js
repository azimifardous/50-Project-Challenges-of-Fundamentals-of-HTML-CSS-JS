const openBtn = document.getElementById("open");
const closeBtn = document.getElementById("close");
const containerDiv = document.querySelector(".container");

openBtn.addEventListener("click", () => containerDiv.classList.add("show-nav"))
closeBtn.addEventListener("click", () => containerDiv.classList.remove("show-nav"))