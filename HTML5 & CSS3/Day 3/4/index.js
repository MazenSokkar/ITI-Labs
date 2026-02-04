let addOutElement = document.getElementById("additionOutput");
let mulOutElement = document.getElementById("multiOutput");
let addfirstInput = document.getElementById("numberone");
let addSecInput = document.getElementById("numbertwo");
let mulfirstInput = document.getElementById("numberthree");
let mulSecInput = document.getElementById("numberfour");

function Sum(){
    let result;
    (addfirstInput.value >= 0 && addSecInput.value >= 0) ? result = +addfirstInput.value + +addSecInput.value : result = 0;
    addOutElement.innerText = result;
}

function Mul(){
    let result;
    (mulfirstInput.value >= 0 && mulSecInput.value >= 0) ? result = mulfirstInput.value * mulSecInput.value : result = 0;
    mulOutElement.innerText = result;
}

addfirstInput.addEventListener("change", Sum);
addSecInput.addEventListener("change", Sum);
mulfirstInput.addEventListener("change", Mul);
mulSecInput.addEventListener("change", Mul);