// mycanvas = document.getElementById('mycanvas');
// mycontext = mycanvas.getContext('2d');
// mycanvas.width = window.innerWidth;
// mousedown => x, y => .arc()  
// function drawcircle(e) {
// mycontext. arc(e.clientX, e. clientY, 10, 0, Math.PI * 2)
// .fill()
// beginPath, closePath
// mousemove => 
// get data url

let canvasElement = document.getElementById("canvas");
let canvasContext = canvasElement.getContext("2d");
canvasElement.width = window.innerWidth;
canvasElement.height = window.innerHeight;

canvasElement.addEventListener("mousedown", (e) => {
    canvasContext.clearRect(0, 0, canvasElement.width, canvasElement.height);
    canvasContext.beginPath();
    canvasContext.fillRect(e.clientX, e.clientY, 30, 30);
    canvasContext.closePath();
});