function calc(op, ...arr){
    return console.log(`result of sum operation for ${arr} is ${eval(arr.join(op))}`);
}
let opr;
do{
    opr = prompt("enter operation from these (+,-,*,/)")
} while(!isValidOpr());

function isValidOpr(){
    return /^[+\*\-/]$/.test(opr);
}

let arr;
do {
    arr = prompt("enter numbers in this form 1,2,3")
    inputArr = arr.split("");
} while (!isValidArr());

function isValidArr(){
    for (const element of inputArr) {
        if (!/^[0-9,]+$/.test(element)) {
            return false;
        }
    }
    return true;
}

if(isValidOpr() && isValidArr()){
    console.log(calc(opr,...arr.split(",")));
}