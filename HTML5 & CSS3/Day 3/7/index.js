let canvasElement = document.getElementById("canvas");
let canvasContext = canvasElement.getContext("2d");
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

let isDrawing = false;

canvasElement.addEventListener("mousemove", (e) => {
    if (isDrawing) {
        canvasContext.fillStyle = "red";
        canvasContext.beginPath();
        canvasContext.fillRect(e.clientX, e.clientY, 30, 30);
        canvasContext.closePath();
    }
});

canvasElement.addEventListener("mousedown", (e) => {
    isDrawing = true;
});

canvasElement.addEventListener("mouseup", (e) => {
    isDrawing = false;
});