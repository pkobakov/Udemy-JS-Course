class Tooltip {

}
class ProjectItem {

    constructor(id, updateProjectListsFunction)
    {   
        this.updateProjectsListsHandler = updateProjectListsFunction;
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton();

    }

    connectMoreInfoButton(){};

    connectSwitchButton(){
        const projItemElement = document.getElementById(this.id);
        const switchButton = projItemElement.querySelector('button:last-of-type');
        switchButton.addEventListener('click', this.updateProjectsListsHandler);
    };

}
class ProjectList{

    projects = [];

    constructor(type)
    {
        this.type = type;
        const projItems = document.querySelectorAll(`#${type}-projects li`);
        console.log(projItems);

        for (const projItem of projItems) {
        this.projects.push(new ProjectItem(projItem.id, this.switchProj.bind(this)));
        }

        console.log(this.projects)
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    };

    addProject(){
        console.log(this);
    }

    switchProj(projId){
        this.switchHandler(this.projects.find(p => p.id === projId));
        this.projects = this.projects.filter(p => p.id !== projId);

    }

}

class App {
    static init(){
        const activeProjectsList = new ProjectList('active');
        const finishedProjectList = new ProjectList('finished');

        activeProjectsList.setSwitchHandlerFunction(finishedProjectList.addProject.bind(finishedProjectList));
        finishedProjectList.setSwitchHandlerFunction(activeProjectsList.addProject.bind(activeProjectsList));
    }

    
}

App.init();
