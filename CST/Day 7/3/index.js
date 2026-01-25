var pElement = document.getElementsByTagName("p")[0];
var targetTable = document.getElementsByTagName("table")[0];
var stylename = '';
targetTable.addEventListener("click", function (e){
    if (e.target.type === "radio"){
        stylename = e.target.name;
        pElement.style[stylename] = e.target.value;
    }
})