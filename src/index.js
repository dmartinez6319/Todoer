import  "./styles.css";
import RenderManager from "./modules/display";
import ProjectManager from "./modules/projects";
import TodoManager from "./modules/todos";

// Instantiate Objects
const projectManager = ProjectManager();
const todoManager = TodoManager();
const renderManager = RenderManager();

// Initalize Prompts
const ADD_TASK = document.querySelector("#add-task")
const ADD_PROJECT = document.querySelector("#add-project")

const DIALOG_PROJECT = document.querySelector("#dialog-project-add")
const DIALOG_TASK = document.querySelector("#dialog-task-add")

ADD_TASK.addEventListener("click",() => {
    let selectedProject = projectManager.getSelectedProject();
    if (selectedProject) {
        DIALOG_TASK.showModal();
    } else {
        alert("Select a project!")
    }
});
ADD_PROJECT.addEventListener("click",() => {
    DIALOG_PROJECT.showModal();
});


renderManager.updateProjects(projectManager.getProjectList());
renderManager.renderPage(projectManager.getSelectedProject());

export const initializeDeleteButton = (project) => {
    projectManager.removeProject(project);
}

export const initializeProjectSelection = (project) => {
    projectManager.setSelectedProject(project);
}

// Initialize Modals

// Reference each Modal through each Dialog, intended purpose (1 parent up) is their dialog id "dialog-[project/task]-[add/edit]"

const Dialogs = {
    "dialog-task-edit": (formData) => {
        todoManager.editTodo(formData);
    },
    "dialog-task-add": (formData) => {
        todoManager.addTodo(formData,projectManager.getSelectedProject())
    },
    "dialog-project-add": (formData) => {
        projectManager.addProject(formData)
    }
}

document.querySelectorAll("dialog").forEach((dialog) => {
    const CURRENT_FORM = dialog.querySelector("form")
    const EXIT_BUTTON = dialog.querySelector("#close-edit")
    const SUBMIT_BUTTON = dialog.querySelector("#edit-submit")
    const DIALOG_ID = dialog.id

    EXIT_BUTTON.addEventListener("click",() => {
        dialog.close()
        CURRENT_FORM.reset()
    })
    

     // Ensure the submit button submits the form in the current dialog
     SUBMIT_BUTTON.addEventListener("click", (event) => {
        event.preventDefault() // Prevent page from refreshing

        if (CURRENT_FORM.checkValidity()){
            const FORM_DATA = new FormData(CURRENT_FORM)



            for (let [key,value] of FORM_DATA.entries()){
                console.log(`${key} | ${value}`)
            }
    
            Dialogs[DIALOG_ID](FORM_DATA);

            dialog.close();
            CURRENT_FORM.reset();
        } else {
            alert("Please fill out all fields")
        }



    });

})

// Starter Todos

const newItem1 = new FormData()
newItem1.append("title", "Do chores");
newItem1.append("info", "Around the House");
newItem1.append("priority", "medium");
newItem1.append("date", "2025-1-1");

const newItem2 = new FormData()
newItem2.append("title", "Study for Exam");
newItem2.append("info", "Math Test");
newItem2.append("priority", "high");
newItem2.append("date", "2025-1-2");

const newItem3 = new FormData()
newItem3.append("title", "Workout");
newItem3.append("info", "Leg Day: Squats, Lunges, Deadlift");
newItem3.append("priority", "low");
newItem3.append("date", "2025-1-1");

todoManager.addTodo(newItem1,projectManager.getSelectedProject())
todoManager.addTodo(newItem2,projectManager.getSelectedProject())
todoManager.addTodo(newItem3,projectManager.getSelectedProject())


