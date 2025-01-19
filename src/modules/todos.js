// Responsible for creating, editing, and deleting todos
import ProjectManager from "./projects";
import RenderManager from "./display";

const projectManager = ProjectManager();
const renderManager = RenderManager();

const TodoManager = () => {

    let editedTodo;

    const addTodo = (formData,selectedProject) => {

        // let selectedProject = projectManager.getSelectedProject();

        selectedProject.projectTodos.push({
            projectName: selectedProject.projectName,
            todoName: formData.get("title"),
            todoInfo: formData.get("info"),
            todoPriority: formData.get("priority"),
            todoDate: formData.get("date")
        })

        renderManager.renderPage(selectedProject);

    }

    const editTodo = (formData,selectedProject) => {

        console.log(editedTodo)

        editedTodo.projectName = selectedProject.projectName,
        editedTodo.todoName = formData.get("title")
        editedTodo.todoInfo = formData.get("info");
        editedTodo.todoPriority = formData.get("priority");
        editedTodo.todoDate = formData.get("date");

        renderManager.renderPage(selectedProject);

    }

    const setEditedTodo = (todo) => {
        editedTodo = todo;
    }

    return {
        editTodo,
        addTodo,
        setEditedTodo
    }

};

export default TodoManager;