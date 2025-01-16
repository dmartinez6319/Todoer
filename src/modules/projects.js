// Responsible for creating, deleting projects and holding todos
import RenderManager from "./display";
const renderManager = RenderManager()

const ProjectManager = () => {

    let projects = [{
        projectName: "General",
        projectTodos: []
    }];

    let selectedProject = projects[0];

    const defaultProject = () => {
        selectedProject = projects[0];
        renderManager.renderPage();
    }

    const addProject = (data) => {
        const dataName =  data.get("title");
        const newProject = {
            projectName: dataName,
            projectTodos: []
        }
        projects.push(newProject);
        let index = projects.indexOf(newProject);
        selectedProject = projects[index]

        renderManager.updateProjects(projects);

    }

    const removeProject = (removedProject) => {

        let index = projects.indexOf(removeProject);
        projects.splice(index,1);
        console.log("new list: " + projects);

        renderManager.updateProjects(projects);

        if (projects.length > 0) {
            defaultProject()
        } else {
            alert("Create a Project to add Todos!")
        }
    }

    const getSelectedProject = () => selectedProject;

    return {
        addProject,
        removeProject,
        getSelectedProject
    };

};

export default ProjectManager;