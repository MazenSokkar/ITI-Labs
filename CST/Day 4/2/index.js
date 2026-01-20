var first_num = 0;
var sec_num = 0;
var third_num = 0;

input1 = parseInt(prompt("Enter First Number"));
first_num = isNaN(input1) === false ? input1 : alert("PLEASE ENTER VALID INPUTS");

input2 = parseInt(prompt("Enter Second Number"));
sec_num = isNaN(input2) === false ? input2 : alert("PLEASE ENTER VALID INPUTS");

input3 = parseInt(prompt("Enter Third Number"));
third_num = isNaN(input3) === false ? input3 : alert("PLEASE ENTER VALID INPUTS");

function Sum(first_num, sec_num, third_num){
    return first_num + sec_num + third_num;
}

function Mul(first_num, sec_num, third_num){
    return first_num * sec_num * third_num;
}


function Div(first_num, sec_num, third_num){
    if(isNaN(first_num / sec_num / third_num) === false)
        return first_num / sec_num / third_num
    return "result is NaN";
}

document.writeln('<p style="color: red; display: inline-block;">Sum of the 3 values = </p><span>' + first_num + '+' + sec_num + '+' + third_num + '=' + Sum(first_num, sec_num, third_num) + '</span> <br>');
document.writeln('<p style="color: red; display: inline-block;">Mul of the 3 values = </p><span>' + first_num + '*' + sec_num + '*' + third_num + '=' + Mul(first_num, sec_num, third_num) + '</span> <br>');
document.writeln('<p style="color: red; display: inline-block;">Div of the 3 values = </p><span>' + first_num + '/' + sec_num + '/' + third_num + '=' + Div(first_num, sec_num, third_num) + '</span>');