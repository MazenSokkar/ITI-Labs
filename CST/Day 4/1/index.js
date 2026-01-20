var input = prompt("Enter Your Message");

var arr =['h1', 'h2', 'h3', 'h4', 'h5', 'h6'];
    

for(var i = 0; i < arr.length; i++){
    document.writeln("<"+ arr[i] +">"+input+"</"+ arr[i] +">");
}