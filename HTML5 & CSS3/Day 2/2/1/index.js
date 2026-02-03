let startButton = document.getElementById("start");
let stopButton = document.getElementById("stop");
let pauseButton = document.getElementById("pause");
let animationBox = document.getElementsByClassName("animationBox")[0];
let div1 = document.querySelector(".div1");
let divwrapper = document.querySelector(".divwrapper");
// let div2 = document.querySelector(".div2");
// let div3 = document.querySelector(".div3");
// let div4 = document.querySelector(".div4");

let isRotating = false;
let isPaused = false;

startButton.addEventListener("click", function (){
    if(!isRotating){
        div1.style["animation"] = "divRotation";
        div1.style["animation-duration"] = "8s";
        div1.style["animation-iteration-count"] = "infinite";
        divwrapper.style["animation"] = "divScaleColor";
        divwrapper.style["animation-duration"] = "8s";
        divwrapper.style["animation-iteration-count"] = "infinite";
        addHovers();
        isRotating = true;
    } else if(isPaused) {
        div1.style["animation-play-state"] = "running";
        divwrapper.style["animation-play-state"] = "running";
        isRotating = true;
        isPaused = false;
    }
});

stopButton.addEventListener("click", function () {
    if (isRotating) {
        div1.style["animation"] = "none";
        divwrapper.style["animation"] = "none";
        removeHovers();
        isRotating = false;
    }
});

pauseButton.addEventListener("click", function(){
    if (isRotating) {
        div1.style["animation-play-state"] = "paused";
        divwrapper.style["animation-play-state"] = "paused";
        addAllHovers();
        isPaused = true;
        isRotating = true;
    }
});

function addHovers() {
    div1.addEventListener("mouseover", function (){
        div1.style["animation-play-state"] = "paused";
        divwrapper.style["animation-play-state"] = "paused";
    })
    div1.addEventListener("mouseout", function (){
        div1.style["animation-play-state"] = "running";
        divwrapper.style["animation-play-state"] = "running";
    })
}

function removeHovers(){
    div1.addEventListener("mouseover", function (){
        div1.style["transform"] = "none";
    })
    div1.addEventListener("mouseout", function (){
        div1.style["transform"] = "none";
    })
}