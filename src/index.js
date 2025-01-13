import "./styles.css";

const button = document.querySelector("#task-status");
const bigButton = document.querySelector("#task-item");
const dia = document.querySelector("#edit-task")

button.addEventListener("click",(event)=>{
    event.stopPropagation();
    alert("touch")
})

bigButton.addEventListener("click", ()=>{
    dia.showModal()
    alert("wham")
})

