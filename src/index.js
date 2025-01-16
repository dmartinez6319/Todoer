import  "./styles.css";
import ProjectManager from "./modules/projects";
import TodoManager from "./modules/todos";

// Instantiate Objects
const projectManager = ProjectManager();
const todoManager = TodoManager();

// Initalize Prompts
const ADD_TASK = document.querySelector("#add-task")
const ADD_PROJECT = document.querySelector("#add-project")

const DIALOG_PROJECT = document.querySelector("#dialog-project-add")
const DIALOG_TASK = document.querySelector("#dialog-task-add")

const PROJECT_ADD_FORM = document.querySelector

ADD_TASK.addEventListener("click",() => {
    DIALOG_TASK.showModal();
});
ADD_PROJECT.addEventListener("click",() => {
    DIALOG_PROJECT.showModal();
});

// Initialize Modals

// Reference each Modal through each Dialog, intended purpose (1 parent up) is their dialog id "dialog-[project/task]-[add/edit]"

const Dialogs = {
    "dialog-task-edit": (formData) => {
        todoManager.editTodo(formData);
    },
    "dialog-task-add": (formData) => {
        todoManager.addTodo(formData)
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
        console.log(CURRENT_FORM)
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
    
            console.log(DIALOG_ID)
            Dialogs[DIALOG_ID](FORM_DATA);

            dialog.close();
            CURRENT_FORM.reset();
        } else {
            alert("Please fill out all fields")
        }



    });

})



