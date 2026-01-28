let nameInput = document.getElementsByName("name")[0];
let selectElement = document.getElementById("country");
let zipInput = document.getElementById("zip");
let mailInput = document.getElementById("mail");
let checkboxInputs = document.getElementsByName("hoppies");
let submitButton = document.getElementById("register");
let clearButton = document.getElementById("clear");
let hoopiesLabel = document.getElementById("hoppieslabel");

window.addEventListener("load", function (e){
    nameInput.focus();
    zipInput.disabled = true;
});

nameInput.addEventListener("blur", function (e){
    if (!isValidName()) {
        //this.focus();
        if(this.parentElement.children[(this.parentElement.children).length - 1].nodeName != "SPAN"){
            this.parentElement.insertAdjacentHTML("beforeend", '<span>You Must enter a valid Name</span>');
        }
    } else {
        if(this.parentElement.children[(this.parentElement.children).length - 1].nodeName === "SPAN"){
            this.parentElement.children[(this.parentElement.children).length - 1].remove();
        }
    }
});

selectElement.addEventListener("change", function (){
    let selectedOption = this.options[this.options.selectedIndex];
    switch (selectedOption.value) {
        case "eg":
            zipInput.value = 1111;
            break;
        case "sa":
            zipInput.value = 2222;
            break;
        case "gr":
            zipInput.value = 3333;
            break;
        default:
            zipInput.value = '';
            break;
    }
    if(isCountrySelected){
        if(selectElement.parentElement.children[(selectElement.parentElement.children).length - 1].nodeName === "SPAN"){
            selectElement.parentElement.children[(selectElement.parentElement.children).length - 1].remove();
        }
    }
});

mailInput.addEventListener('focus', function(){
    mailInput.addEventListener("blur", function (e){
        if (!isEmailValid()) {
            this.focus();
            if(this.parentElement.children[(this.parentElement.children).length - 1].nodeName != "SPAN"){
                this.parentElement.insertAdjacentHTML("beforeend", '<span>You Must enter a valid Email example@example.com</span>');
            }
        } else {
        if(this.parentElement.children[(this.parentElement.children).length - 1].nodeName === "SPAN"){
            this.parentElement.children[(this.parentElement.children).length - 1].remove();
        }
    }
    });
});

for (const i of checkboxInputs) {
    i.addEventListener("change", function () {
        if (areAnyHoppiesChecked) {
            if(document.querySelector("#checkboxfields>span") != null)
            {
                document.querySelector("#checkboxfields>span").remove();
            }
        }
    });
};



submitButton.addEventListener("click", function (e){
    if(!isEmailValid() || !isValidName() || !areAnyHoppiesChecked() || !isCountrySelected()){
        e.preventDefault();
        if(!isEmailValid() && !isValidName() && !areAnyHoppiesChecked() && !isCountrySelected()){
            if(nameInput.parentElement.children[(nameInput.parentElement.children).length - 1].nodeName === "SPAN"){
                nameInput.parentElement.children[(nameInput.parentElement.children).length - 1].remove();
            }
            nameInput.parentElement.insertAdjacentHTML("beforeend", '<span>You Must enter valid name</span>');

            if(selectElement.parentElement.children[(selectElement.parentElement.children).length - 1].nodeName === "SPAN"){
                selectElement.parentElement.children[(selectElement.parentElement.children).length - 1].remove();
            }
            selectElement.parentElement.insertAdjacentHTML("beforeend", '<span>You Must select a country</span>');

            if(mailInput.parentElement.children[(mailInput.parentElement.children).length - 1].nodeName === "SPAN"){
                mailInput.parentElement.children[(mailInput.parentElement.children).length - 1].remove();
            }
            mailInput.parentElement.insertAdjacentHTML("beforeend", '<span>You Must enter a valid Email example@example.com</span>');

            if(document.querySelector("#checkboxfields>span") != null)
            {
                document.querySelector("#checkboxfields>span").remove();
            }
            hoopiesLabel.insertAdjacentHTML("afterend", '<span>You Must check hoppies</span>');
        }  else if (!areAnyHoppiesChecked()){
            if(document.querySelector("#checkboxfields>span") != null)
            {
                document.querySelector("#checkboxfields>span").remove();
            }
            hoopiesLabel.insertAdjacentHTML("afterend", '<span>You Must check hoppies</span>');
        }
        // if(this.parentElement.children[(this.parentElement.children).length - 1].nodeName != "SPAN"){
        //     this.parentElement.insertAdjacentHTML("beforeend", '<span>You Must choose at least 1 hoppy and complete all fields</span>');
        // }
    }
});

clearButton.addEventListener('click', function(e){
    if(!confirm("r u sure?"))
    {
        e.preventDefault();
    } else {
        if(selectElement.parentElement.children[(selectElement.parentElement.children).length - 1].nodeName === "SPAN"){
            selectElement.parentElement.children[(selectElement.parentElement.children).length - 1].remove();
        }
        if(nameInput.parentElement.children[(nameInput.parentElement.children).length - 1].nodeName === "SPAN"){
            nameInput.parentElement.children[(nameInput.parentElement.children).length - 1].remove();
        }
        if(mailInput.parentElement.children[(mailInput.parentElement.children).length - 1].nodeName === "SPAN"){
            mailInput.parentElement.children[(mailInput.parentElement.children).length - 1].remove();
        }
        if(document.querySelector("#checkboxfields>span") != null)
        {
            document.querySelector("#checkboxfields>span").remove();
        }   
    }
});

function isValidName(){
    return /^[A-Za-z ]+$/.test(nameInput.value.trim())
}

function isEmailValid() {
    return /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/.test(mailInput.value)
}

function areAnyHoppiesChecked(){
    for (let input of checkboxInputs) {
        if (input.checked) {
            return true;
        }
    }
    return false;
}

function isCountrySelected(){
    if(selectElement.options[selectElement.options.selectedIndex].value === 'se'){
        return false;
    }
    return true;
}