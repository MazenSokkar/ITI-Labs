let canvasElement = document.getElementById("canvas");
let canvasContext = canvasElement.getContext("2d");
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

canvasElement.addEventListener("mousedown", (e) => {
    canvasContext.beginPath();
    canvasContext.fillRect(e.clientX, e.clientY, 30, 30);
    canvasContext.closePath();
});