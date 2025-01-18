// Responsible for order list of todos in a project with corressponding color of importance


const PriorityManager = () => {

    // Project Object => Todos Array => Todo Object => Priority Property ("high,medium,low")
    const sortOrder = (selectedProject) =>{

        console.log("SORTING ORDER..")
        console.log(selectedProject.projectTodos)
        const priorityRanked = {
            "high": 1,
            "medium": 2,
            "low": 3
        }

        selectedProject.projectTodos.sort((a,b) => {
            console.log(a)
            console.log(priorityRanked[a.todoPriority])
            console.log(b)
            return priorityRanked[a.todoPriority ] - priorityRanked[b.todoPriority]
        } )

        console.log("SORTED")
        console.log(selectedProject.projectTodos)

        // Return resorted projectodos array MAYBE

    }
    return {sortOrder}
}

export default PriorityManager;