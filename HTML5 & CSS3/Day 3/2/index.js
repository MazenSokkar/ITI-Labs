let imgs = document.images;
let topELement = document.getElementsByClassName("top")[0];
let bottom = document.getElementsByClassName("bottom")[0];

for (let i = 0; i < imgs.length; i++) {
    imgs[i].addEventListener("dragstart", dragStart);
    imgs[i].addEventListener("dragend", dragEnd);
}
bottom.addEventListener("dragover", dragOver);
bottom.addEventListener("dragenter", dragEnter);
bottom.addEventListener("drop", drop);
topELement.addEventListener("dragleave", dragLeave)

function dragStart(e){
    e.dataTransfer.setData("myimg", e.target.outerHTML);
}

function dragEnd(e){
    e.preventDefault();
    e.target.remove();
    if (topELement.children.length === 0) {
        topELement.innerText = "Empty"
    }
}

function dragOver(e){
    e.preventDefault();
}

function drop(e){
    e.preventDefault();
    bottom.innerHTML+=e.dataTransfer.getData("myimg");
}

function dragEnter(e){
    e.preventDefault();
    e.target.style.backgroundColor = "green"
}

function dragLeave(e){
    e.preventDefault();
}