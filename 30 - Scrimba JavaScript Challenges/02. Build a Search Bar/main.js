document.getElementById("searchInput").addEventListener("keyup", function (event) {
    let searchQuery = event.target.value.toLowerCase()
    let allNamesDOMCollection = document.getElementsByClassName("name")

    for (let i = 0; i < allNamesDOMCollection.length; i++) {
        const currentName = allNamesDOMCollection[i].textContent.toLocaleLowerCase()

        if (currentName.includes(searchQuery)) {
            allNamesDOMCollection[i].style.display = "block"
        } else {
            allNamesDOMCollection[i].style.display = "none"
        }
    }
})