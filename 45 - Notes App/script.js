
const addBtn = document.getElementById("add-btn");
addBtn.addEventListener("click", () => {
    addNewNote();
})


function addNewNote(text = "") {
    const noteDiv = document.createElement('div');
    noteDiv.classList.add("note");
    noteDiv.innerHTML = `
        <div class="tools">
            <button class="edit"><i class="fa-solid fa-edit"></i></button>
            <button class="delete"><i class="fa-solid fa-trash-alt"></i></button>
        </div>
        <div class="main ${text ? "" : "hidden"}"></div>
        <textarea class="${text ? "hidden" : ""}" autofocus></textarea>
    `
    const editBtn = noteDiv.querySelector(".edit");
    const deleteBtn = noteDiv.querySelector(".delete");
    const mainDiv = noteDiv.querySelector(".main");
    const textArea = noteDiv.querySelector("textarea");
    const toolsDiv = noteDiv.querySelector(".tools");

    const bgColorsArr = ["#cdf0ea", "#F6C6EA", "#FAF4B7", "#DFBB9D", "#8CC0DE"];
    toolsDiv.style.backgroundColor = bgColorsArr[Math.floor(Math.random() * 5)]

    textArea.value = text;
    mainDiv.innerHTML = marked.parse(text);

    deleteBtn.addEventListener("click", () => {
        noteDiv.remove()
        updateLocalStorage()
    })

    editBtn.addEventListener("click", () => {
        mainDiv.classList.toggle("hidden")
        textArea.classList.toggle("hidden")
    })

    textArea.addEventListener("input", e => {
        const { value } = e.target;
        mainDiv.innerHTML = marked.parse(value);
        updateLocalStorage()
    })

    document.body.appendChild(noteDiv);
}

function updateLocalStorage() {
    const notesData = document.querySelectorAll("textarea");
    const dataArr = [];
    notesData.forEach(noteData => dataArr.push(noteData.value));
    localStorage.setItem("notesData", JSON.stringify(dataArr));
}

const notes = JSON.parse(localStorage.getItem("notesData"));
// check if there's any note and add them
if (notes) {
    notes.forEach(note => addNewNote(note))
}

