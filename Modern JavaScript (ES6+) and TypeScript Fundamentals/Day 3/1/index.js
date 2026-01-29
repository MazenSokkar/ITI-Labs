async function fetchUsers() {
    let usersResponse = await fetch('https://jsonplaceholder.typicode.com/users');
    let data = await usersResponse.json();
    return data;
}

let users = await fetchUsers();

let namesDiv = document.getElementsByClassName("names")[0];

function insertNames(){
    users.forEach(element => {
        let createdElement = document.createElement("span");
        createdElement.setAttribute("id", element.id)
        createdElement.textContent = element.name;
        namesDiv.appendChild(createdElement);
    });
}
insertNames();

let ulElement = document.getElementsByClassName("ulDetails")[0];

namesDiv.addEventListener("click" ,function (e) {
    if(e.target.nodeName === "SPAN"){
        document.querySelectorAll(".names>span").forEach(element => {
            element.style.backgroundColor = "lightblue"
        });
        e.target.style.backgroundColor = "red";
    }
    let clickedNameId = e.target.id;
    if (clickedNameId) {
        let clickedUser = users[clickedNameId - 1];
        if (ulElement.children.length === 0) {
            addUserDetails(clickedUser);
        } else {
            ulElement.innerHTML = '';
            addUserDetails(clickedUser);
        }
    }
})

function addUserDetails(user) {
    let idLi = document.createElement("li")
    idLi.innerText = `ID : ${user.id}`;
    let nameLi = document.createElement("li")
    nameLi.innerText = `Name : ${user.name}`;
    let userNameLi = document.createElement("li")
    userNameLi.innerText = `Username: ${user.username}`;
    let emailLi = document.createElement("li")
    emailLi.innerText = `E-Mail : ${user.email}`;
    let addressLi = document.createElement("li")
    addressLi.innerText = `Address: ${user.address.street}, ${user.address.suite}, ${user.address.city} ${user.address.zipcode}, ${user.address.geo.lat} ${user.address.geo.lng}`;
    let phoneLi = document.createElement("li")
    phoneLi.innerText = `Phone : ${user.phone}`;
    let websiteLi = document.createElement("li")
    websiteLi.innerText = `Website : ${user.website}`;
    let companyLi = document.createElement("li")
    companyLi.innerText = `Company : ${user.company.name}, ${user.company.catchPhrase}, ${user.company.bs}`
    ulElement.appendChild(idLi);
    ulElement.appendChild(nameLi);
    ulElement.appendChild(userNameLi);
    ulElement.appendChild(emailLi);
    ulElement.appendChild(addressLi);
    ulElement.appendChild(phoneLi);
    ulElement.appendChild(websiteLi);
    ulElement.appendChild(companyLi);
}