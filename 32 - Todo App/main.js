// Let's make the dark mode and light mode versions
const moon = document.querySelector(".moon");
const sun = document.querySelector(".sun");

moon.addEventListener("click", () => {
    document.body.classList.add("dark")
})

sun.addEventListener("click", () => {
    document.body.classList.remove("dark")
})

//Let's make the app functional
// Grabbing all the elements that is required
const typeInput = document.querySelector(".typeInp");
const itemLeftEl = document.querySelector(".itemLeft");
const listItemsEl = document.querySelector(".list-items");
const clearBtn = document.querySelector(".clearBtn");
const headingInp = document.querySelector(".heading__input");
const completedBtn = document.querySelector(".completedBtn");
const activeBtn = document.querySelector(".activeBtn");
const allBtn = document.querySelector(".allBtn");
const todoBlock = document.querySelector(".todos--block");
const filterBlock = document.querySelector(".filter--block");
let isCheck = false;
let taskArr = [];
let checkedTask = [];
let completedTask = [];
let activeTask = [];
let allTask = [];
let isTaskAdded = false;

typeInput.addEventListener("keypress", (event) => {
    // if the pressed key is enter (Key #13) then do...
    if (event.which === 13) {
        if (typeInput.value === "") {
            headingInp.classList.add("invalid")
            setTimeout(function () {
                headingInp.classList.remove("invalid")
            }, 500)
        } else {
            isTaskAdded = true
            todoBlock.style.display = "flex"
            filterBlock.style.display = "flex"
            taskArr.push(typeInput.value)
            typeInput.value = ""
            renderTask(taskArr)
            itemLeft(taskArr, " Left")
        }
    }
})


// Make a function that should render out the task
function renderTask(arr) {
    let listStr = ""

    for (let i = 0; i < arr.length; i++) {
        listStr += `
        <li class="item">
            <div class="task-item">
                <button class="doneBtn" onclick='completeTask("${arr[i]}")'>
                    <img src="/images/icon-check.svg" alt="" class="check-ico">
                </button>
            <span class="task">${arr[i]}</span>
            </div>
            <button class="deleteBtn" onclick='deleteItem("${arr[i]}")'>
                <img src="/images/icon-cross.svg" alt="">
            </button>
        </li>`
    }
    listItemsEl.innerHTML = listStr
}

function deleteItem(item) {
    // find the index of the array and then remove it whenever this function invoked
    const index = taskArr.findIndex((element) => element == item)
    if (index !== -1) {
        taskArr.splice(index, 1)
    }
    renderTask(taskArr)
    itemLeft(taskArr, " Left")
}

// Make an insert method for our arrays
Array.prototype.insert = function (index, item) {
    this.splice(index, 0, item);
};

function completeTask(item) {
    const itemEl = document.querySelectorAll(".item");
    checkedTask = Array.from(itemEl)
    const index = checkedTask.findIndex((element) => element.innerText == item)
    if (index !== -1) {
        checkedTask[index].classList.toggle("checked")
        if (checkedTask[index].classList.contains("checked")) {
            isCheck = true
            if (isCheck === true) {
                taskArr.splice(index, 1)
            }
        } else {
            isCheck = false
            // if there's no element with className of checked then add it back to the array
            taskArr.insert(index, item)
        }
    }

}

// A function that can specify items of an array
function itemLeft(arr, text) {
    itemLeftEl.textContent = `${arr.length} Items${text}`
}


completedBtn.addEventListener("click", () => {
    if (isCheck === true) {
        completedTask = checkedTask.filter(element => element.classList.contains("checked"))
        for (let i = 0; i < checkedTask.length; i++) {
            if (checkedTask[i].classList.contains("checked")) {
                checkedTask[i].style.display = "flex"
            } else if (checkedTask[i].classList.contains("item")) {
                checkedTask[i].style.display = "none"
            }
        }
        itemLeft(completedTask, " Done")
    } else {
        alert("You haven't completed anything.")
    }

})


activeBtn.addEventListener("click", () => {
    for (let i = 0; i < checkedTask.length; i++) {
        if (checkedTask[i].classList.contains("checked")) {
            checkedTask[i].style.display = "none"
        } else if (checkedTask[i].classList.contains("item")) {
            checkedTask[i].style.display = "flex"
        }
    }

    itemLeft(taskArr, " Left")
})

allBtn.addEventListener("click", () => {
    allTask = checkedTask
    for (let i = 0; i < allTask.length; i++) {
        allTask[i].style.display = "flex"
    }

    itemLeft(allTask, "")
})

clearBtn.addEventListener("click", () => {
    // if task or an item is added then execute these codes otherwise show an alert
    if (isTaskAdded === true) {
        taskArr = []
        checkedTask = []
        completedTask = []
        renderTask(taskArr)
        itemLeft(taskArr, "")
    } else {
        alert("No task is added yet.")
    }
})