// Responsible for handling and creating DOM elements
import {initializeDeleteButton} from "../index";

const MODAL = document.querySelector("#edit-task")
const PROJECT_TEMPLATE = document.querySelector(".project-item").cloneNode(true);
const PROJECT_HOLDER = document.querySelector("#project-holder");

const RenderManager = () => {
    // Displays all todos of currently selected project and updates the header
    const renderPage = (selectedProject) => {

    }

    const updateProjects = (projectList) => {
        PROJECT_HOLDER.replaceChildren();
        for (let project of projectList) {
            const projectTitle = project.projectName;
            console.log(project)
            const PROJECT_SPACE = PROJECT_TEMPLATE.cloneNode(true);
            const PROJECT_SPACE_NAME = PROJECT_SPACE.querySelector("#project-item-name");
            PROJECT_SPACE_NAME.innerHTML = projectTitle;
            const PROJECT_SPACE_DELETE = PROJECT_SPACE.querySelector("#project-remove")
            PROJECT_HOLDER.appendChild(PROJECT_SPACE)

            PROJECT_SPACE_DELETE.addEventListener("click",()=>initializeDeleteButton(project))

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