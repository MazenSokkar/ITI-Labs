var cookieExpiryDate = new Date(2027,5,6);
var cookieIndex = 1;

function addRow(_news,_type){
    var targetTable = document.getElementsByTagName("table")[0];
    var createdtr = document.createElement("tr");
    var newstd = document.createElement("td");
    var typetd = document.createElement("td");
    newstd.innerText = _news;
    typetd.innerText = _type;
    createdtr.appendChild(newstd);
    createdtr.appendChild(typetd);
    targetTable.appendChild(createdtr);
}

var cookies = document.cookie;
var newsInCookieArr = cookies.split(";");
function getNewsFromCookies() {
    if (cookies != '') {
        for (let i = 0; i < newsInCookieArr.length; i++) {
            var newFromCookie = newsInCookieArr[i].split("=")[1].split(":")[0];
            var typeFromCookie = newsInCookieArr[i].split("=")[1].split(":")[1];
            addRow(newFromCookie, typeFromCookie);
        }
        cookieIndex = newsInCookieArr.length + 1;
    }
}
window.addEventListener("load", getNewsFromCookies);

var optionInputs = document.querySelectorAll(".option>input");
var selectedType = '';
function selectType(){
    for (var i = 0; i < optionInputs.length; i++) {
        if (optionInputs[i].checked) {
            selectedType = optionInputs[i].value;
        }
    }
}
for (var i = 0; i < optionInputs.length; i++) {
    optionInputs[i].addEventListener("click", selectType)
}

function validateNews(str){
    if(str == '' || str.trim() == ''){
        alert("You have to add a News!");
        return false;
    } else if (!isNaN(str.trim()[0])){
        alert("News must start with character");
        return false;
    } else {
        return true;
    }
}

function isNewsExisting(n, t){
    if (cookies != '') {
        var exsitingNewsArray = cookies.split(";");
        if(exsitingNewsArray.length > 0){
            for (let i = 0; i < exsitingNewsArray.length; i++) {
                var newFromCookie = exsitingNewsArray[i].split("=")[1].split(":")[0];
                var typeFromCookie = exsitingNewsArray[i].split("=")[1].split(":")[1];
                if (n.trim().toLowerCase() === newFromCookie.trim().toLowerCase() && t.trim().toLowerCase() === typeFromCookie.trim().toLowerCase()) {
                    return true;
                }
                else {
                    return false;
                }
            }
        }
    } else {
        return false;
    }
}

function addNews() {
    if (selectedType != '') {
        var news = document.getElementById("news").value;
        if (validateNews(news) && isNewsExisting(news, selectedType) == false) {
            addRow(news, selectedType);
            document.cookie = "news" + cookieIndex + "=" + news + ":" + selectedType + ";expires=" + cookieExpiryDate;
            cookieIndex++;
        } else {
            if(isNewsExisting(news, selectedType) === true) {
                alert("you cant enter new twice");
            }
        }
    } else {
        alert("you must select a type");
    }
}
document.getElementsByTagName("button")[0].addEventListener("click", addNews);

function search(){
    var searchKeyword = document.getElementById("search").value;
    var targetTable = document.getElementsByTagName("table")[0];
    var rows = targetTable.getElementsByTagName("tr");
    while(rows.length > 1) {
        targetTable.removeChild(rows[1]);
    }
    if (searchKeyword === '') {
        getNewsFromCookies();
    } else {
        newsInCookieArr.forEach(function (_val){
            if(_val.includes(searchKeyword)){
            var newFromCookie = _val.split("=")[1].split(":")[0];
            var typeFromCookie = _val.split("=")[1].split(":")[1];
            addRow(newFromCookie, typeFromCookie);
            }
        })
    }
}
document.getElementById("search").addEventListener("keypress", function (k){
    if(k.key === 'Enter'){
        search();
    }
})