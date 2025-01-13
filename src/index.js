import "./styles.css";

const button = document.querySelector("#task-status");
const bigButton = document.querySelector("#task-item");

button.addEventListener("click",(event)=>{
    event.stopPropagation();
    alert("touch")
})

bigButton.addEventListener("click", ()=>{
    alert("wham")
})

