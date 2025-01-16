// Responsible for creating, editing, and deleting todos
import ProjectManager from "./projects";
import RenderManager from "./display";
const projectManager = ProjectManager();
const renderManager = RenderManager();

const TodoManager = () => {

    const addTodo = (formData,name, info, priority, date) => {

        let selectedProject = projectManager.getSelectedProject();
        console.log(selectedProject)
        console.log(formData)
        selectedProject.projectTodos.push({
            projectName: selectedProject.projectName,
            todoName: formData.get("title"),
            todoInfo: formData.get("info"),
            todoPriority: formData.get("priority"),
            todoDate: formData.get("date")
        })

        renderManager.renderPage(selectedProject);

    }

    const editTodo = (name, info, date, priority) => {

    }

    return {
        editTodo,
        addTodo
    }

};

export default TodoManager;