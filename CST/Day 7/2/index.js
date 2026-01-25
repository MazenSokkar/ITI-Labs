var cookieExpiryDate = new Date(2027,5,6);
var removeCookieDate = new Date(2020,2,2);
var cookieIndex = 1;
var targetTable = document.getElementsByTagName("table")[0];
var taskIdindex = 1;

function addRow(_task){
    var createdtr = document.createElement("tr");
    createdtr.setAttribute("id", "task" + taskIdindex)
    var donetd = document.createElement("td");
    var tasktd = document.createElement("td");
    var deletetd = document.createElement("td");
    donetd.innerHTML = '<input type="checkbox">';
    donetd.setAttribute("id", "taskcheck"+ taskIdindex);
    tasktd.innerText = _task;
    tasktd.setAttribute("id", "tasktext"+ taskIdindex);
    deletetd.innerHTML = '<button>🗑️</button>'
    deletetd.setAttribute("id", "taskdelete"+ taskIdindex);
    taskIdindex++;
    createdtr.appendChild(donetd);
    createdtr.appendChild(tasktd);
    createdtr.appendChild(deletetd);
    targetTable.appendChild(createdtr);
}

var cookies = document.cookie;
function getTasksFromCookie(){
    if (cookies != '') {
        var cookiesArr = cookies.split(";");
        cookiesArr.forEach(function (_cookie){
            addRow(_cookie.split("=")[1]);
        });
        cookieIndex = cookiesArr.length + 1;
    }
}

function setupCheckboxEventHandler(){
    var targettable = document.querySelector("table");
    targettable.addEventListener("click", function (e){
        if(e.target.type === "checkbox"){
            var taskId = e.target.parentElement.id.split("taskcheck")[1];
            if(e.target.checked){
                document.getElementById("tasktext" + taskId).style["text-decoration"] = "line-through";
            } else {
                document.getElementById("tasktext" + taskId).style["text-decoration"] = "none";
            }
        }
    });
}

function setupDeleteEventHandler(){
    var targettable = document.querySelector("table");
    targettable.addEventListener("click", function (e){
        if(e.target.nodeName === "BUTTON"){
            var taskId = e.target.parentElement.id.split("taskdelete")[1];
            var confirmation = confirm("r u sure that u want to delete this task");
            if (confirmation === true) {
                var childtr = document.getElementById("task" + taskId);
                if(childtr != null){
                    document.cookie = "task" + taskId + "=" + "" + ";expires=" + removeCookieDate;
                    childtr.remove();
                }
            };
        }
    });
}

window.addEventListener("load", function(){
    getTasksFromCookie();
    setupCheckboxEventHandler();
    setupDeleteEventHandler();
})

function validateTask(str){
    if(str == '' || str.trim() == ''){
        alert("You have to add a Task!");
        return false;
    } else if (!isNaN(str.trim()[0])){
        alert("Task must start with character");
        return false;
    } else {
        return true;
    }
}

function addTask(){
    var task = document.getElementsByTagName("input")[0].value;
    if (validateTask(task)) {
        addRow(task);
        document.cookie = "task" + cookieIndex + "=" + task + ";expires=" + cookieExpiryDate;
        cookieIndex++;
    }
    document.getElementsByTagName("input")[0].value = '';
}
document.querySelector(".task-input>button").addEventListener("click", addTask);

document.getElementsByTagName("input")[0].addEventListener("input", function(){
    if(this.value.length > 0){
        document.querySelector(".task-input>button").style["background-color"] = "#347CD4";
    }
});