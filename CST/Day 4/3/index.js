var img_name = prompt("Enter Image Name");
var color = prompt("Enter Color Name");

document.write(
    '<p style="color:' + color + ';">' + img_name + '</p>'
);

document.write(
    '<img style="border: 4px solid ' + color + ';" src="image.png" />'
);