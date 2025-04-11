document.addEventListener
const input = document.getElementById("noteInput");
const button = document.getElementById("btn");
const list = document.querySelector(".notesList");
let notes = [];

function readTask(){
    list.innerHTML = input.value;
    notes.forEach((note,index) =>{
        const p = document.createElement("p");
        p.innerHTML = note;
    });
} 
function addTask(){
    let value = input.value;
    notes.push(index);
    readTask();
}
function updateTask(){}
function deleteTask(){}

button.addEventListener("click",function(){
    readTask();
});
readTask();