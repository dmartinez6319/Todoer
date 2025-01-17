// Responsible for handling and creating DOM elements
import {initializeDeleteButton, initializeProjectSelection} from "../index";

const MODAL = document.querySelector("#edit-task")
const PROJECT_TEMPLATE = document.querySelector(".project-item").cloneNode(true);
const PROJECT_HOLDER = document.querySelector("#project-holder");

const HEADER_TITLE = document.querySelector("#title");
const HEADER_COUNTER = document.querySelector("#counter")

const TODO_HOLDER = document.querySelector(".tasks-container");
const TODO_TEMPLATE = document.querySelector("#task-item").cloneNode(true);

const RenderManager = () => {
    // Displays all todos of currently selected project and updates the header
    const renderPage = (selectedProject) => {
        HEADER_TITLE.innerHTML = selectedProject.projectName;
        HEADER_COUNTER.innerHTML = selectedProject.projectTodos.length;
        console.log("==================")
        console.log(selectedProject)
        TODO_HOLDER.replaceChildren();
        for (let todo of selectedProject.projectTodos) {
            const TODO_CARD = TODO_TEMPLATE.cloneNode(true);
            const TASK_NAME = TODO_CARD.querySelector("#task-name");
            const TASK_INFO = TODO_CARD.querySelector("#task-info");
            const TASK_PRIORITY_HOLDER = TODO_CARD.querySelector("#task-title"); // append an id of med-low
            const TASK_DATE = TODO_CARD.querySelector("#task-date");

            TASK_NAME.innerHTML = todo.todoName;
            if (todo.todoInfo) {
                TASK_INFO.innerHTML = todo.todoInfo;
            }
            
            const PRIORITY_ICON = document.createElement("i");
            PRIORITY_ICON.id = todo.todoPriority;
            PRIORITY_ICON.classList.add("fa-solid");
            PRIORITY_ICON.classList.add("fa-circle");
            TASK_PRIORITY_HOLDER.appendChild(PRIORITY_ICON);
            TASK_DATE.innerHTML = todo.todoDate;

            const TASK_REMOVE = TODO_CARD.querySelector("#remove-task")

            TASK_REMOVE.addEventListener("click",(event)=>{
                event.stopPropagation();

                let index = selectedProject.projectTodos.indexOf(todo)
                console.log(index)

                selectedProject.projectTodos.splice(index,1);

                console.log(selectedProject)
                
                renderPage(selectedProject)
            })

            TODO_HOLDER.appendChild(TODO_CARD);

        }

    }

    const updateProjects = (projectList) => {
        PROJECT_HOLDER.replaceChildren();
        for (let project of projectList) {
            const projectTitle = project.projectName;
            const PROJECT_SPACE = PROJECT_TEMPLATE.cloneNode(true);
            const PROJECT_SPACE_NAME = PROJECT_SPACE.querySelector("#project-item-name");
            PROJECT_SPACE_NAME.innerHTML = projectTitle;
            const PROJECT_SPACE_DELETE = PROJECT_SPACE.querySelector("#project-remove")
            PROJECT_HOLDER.appendChild(PROJECT_SPACE)

            PROJECT_SPACE.addEventListener("click",()=>{
                initializeProjectSelection(project);});
            PROJECT_SPACE_DELETE.addEventListener("click",(event)=>{
                event.stopPropagation();
                initializeDeleteButton(project);});

        }
    }

    // Displays todo edit modal
    const renderEditModal = () => {

    }

    return {
        renderPage,
        updateProjects
    }
}

export default RenderManager;