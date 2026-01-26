function isValidNumber(n){
    return /^[0-9]+$/.test(n);
}

function isValidPropertyName(n){
    return /^(?![0-9A-Z])\S+$/.test(n);
}

function isValidName (n){
    return /^[A-Za-z]+$/.test(n)
}

let frstName;
do {
    frstName = prompt("enter first property name");
} while (!isValidPropertyName(frstName));

let frstValue;
do {
    frstValue = prompt("enter first property value (number)");
} while (!isValidNumber(frstValue));

let scndName;
do {
    scndName = prompt("enter second property name");
} while (!isValidPropertyName(scndName));

let scndValue;
do {
    scndValue = prompt("enter second property value ");
} while (!isValidName(scndValue));

let thrdName;
do {
    thrdName = prompt("enter third property name");
} while (!isValidPropertyName(thrdName));

let thrdValue;
do {
    thrdValue = prompt("enter third property value (number)");
} while (!isValidNumber(thrdValue));

if(isValidName(scndValue) && isValidNumber(frstValue) && isValidNumber(thrdValue) && isValidPropertyName(frstName) && isValidPropertyName(scndName) && isValidPropertyName(thrdName)){
    const anonymous = {
        [frstName] : frstValue,
        [scndName] : scndValue,
        [thrdName] : thrdValue,
        printData : () => {
            console.log(`${frstName}: ${frstValue}, ${scndName} : ${scndValue}, ${thrdName} = ${thrdValue}`);
        }
    }
    Object.freeze(anonymous);
    anonymous.printData();
}