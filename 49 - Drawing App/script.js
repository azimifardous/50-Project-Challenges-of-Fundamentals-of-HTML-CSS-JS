// Making the increment and decrement elements functional
const incrementBtn = document.getElementById("increment-btn");
const decrementBtn = document.getElementById("decrement-btn");
const numberEl = document.getElementById("number");
let step, value, x, y;
let drawWidth = 5; // Initial size defined
let drawColor = 'black'; // Initial Color defined
let isDrawing = false;

incrementBtn.addEventListener("click", increment)
decrementBtn.addEventListener("click", decrement)

function increment() {
    step = Number(numberEl.step);
    value = Number(numberEl.value);
    if (numberEl.value == numberEl.max) {
        numberEl.value = 50
    } else {
        numberEl.value = value + step
    }
    drawWidth = numberEl.value
}

function decrement() {
    step = Number(numberEl.step);
    value = Number(numberEl.value);
    if (numberEl.value == numberEl.min) {
        numberEl.value = 5
    } else {
        numberEl.value = value - step
    }
    drawWidth = numberEl.value
}

// Let's grab the color-picker and make it functional
const colorPicker = document.getElementById("color-picker");
colorPicker.addEventListener("input", () => {
    drawColor = colorPicker.value
})

// Let's work on canvas element - fetching the canvas API
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.addEventListener("mousedown", startDrawing);
canvas.addEventListener("mouseup", stopDrawing);
canvas.addEventListener("mousemove", continueDrawing)

function startDrawing(event) {
    isDrawing = true; // Mouse is pressed & Drawing begins
    x = event.offsetX;
    y = event.offsetY;
    drawShape(x, y)
}

function stopDrawing() {
    isDrawing = false; // Mouse is released & Drawing ends
    x = undefined;
    y = undefined;
}

function continueDrawing(event) {
    if (isDrawing) {
        const x2 = event.offsetX;
        const y2 = event.offsetY;
        drawShape(x2, y2)
        drawLine(x2, y2, x, y)
        x = x2;
        y = y2
    }
}

// Creating the path and shapes
function drawShape(x, y) {
    ctx.beginPath()
    ctx.arc(x, y, drawWidth, 0, 2 * Math.PI)
    ctx.fillStyle = drawColor
    ctx.fill()
}

function drawLine(x1, y1, x2, y2) {
    ctx.beginPath();
    ctx.moveTo(x1, y1);
    ctx.lineTo(x2, y2);
    ctx.strokeStyle = drawColor
    ctx.lineWidth = drawWidth * 2 // since drawWidth is the size of the radius of the shape we multiply it by 2 to get the same size for the lines as well.
    ctx.stroke();
}

// a function to clear the canvas
const clearBtn = document.getElementById("delete-btn")
clearBtn.addEventListener("click", ctx.clearRect(0, 0, canvas.width, canvas.height))
