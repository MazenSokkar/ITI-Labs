var mainCheckbox = document.getElementById("main");
var branchCheckbox = document.getElementById("branch");
var mainBranchP = document.querySelector(".mainB");
var branchPs = document.querySelectorAll(".branchB");

mainCheckbox.addEventListener('change', function (){
    if(this.checked){
        mainBranchP.style["color"] = 'rgb(114, 19, 19)';
    } else {
        mainBranchP.style["color"] = 'black'
    }
});

branchCheckbox.addEventListener('change', function (){
    branchPs.forEach(function (_val) {
        if(branchCheckbox.checked){
            _val.style["color"] = '#325064';
        } else {
            _val.style["color"] = 'black'
        }
    })
})