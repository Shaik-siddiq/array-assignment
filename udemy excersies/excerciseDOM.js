var input = document.getElementById("inputtext")
var button = document.getElementById("enter")
var ul = document.querySelector("ul")

function inputlenth(){
    return input.value.length;
}

function createlist(){
    var li = document.createElement("li");
    li.appendChild(document.createTextNode(input.value));
    ul.appendChild(li)
    input.value="";
}
function addEventlist(){
    if (inputlenth() > 0){
        createlist()
    }
}
function addlistafterKeypress(event){
    if(inputlenth() > 0 && event.KeyCode === 13){
        createlist()
    }
}

input.addEventListener("keypress", addlistafterKeypress);