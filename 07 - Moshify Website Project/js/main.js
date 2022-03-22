const collapsibles = document.querySelectorAll(".collapsable");
collapsibles.forEach((item) =>
  item.addEventListener("click", function () {
    this.classList.toggle("collapsable--expanded");
  })
);