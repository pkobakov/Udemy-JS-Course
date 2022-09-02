class DOMHelper {
    static moveElement(elementId, newDestination) {
        const element = document.getElementById(elementId);
        const destinationElement  = document.querySelector(newDestination);
        destinationElement.append(element);
    }

    static clearEventListeners (element) {
        const clonedElement = element.cloneNode(true);
        element.replaceWith(clonedElement);

        return clonedElement;
    }
}
class Tooltip {

}
class ProjectItem {

    constructor(id, updateProjectListsFunction, type)
    {   
        this.type = type;
        this.updateProjectsListHandler = updateProjectListsFunction;
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);

    }

    connectMoreInfoButton(){};

    connectSwitchButton(type){
        const projItemElement = document.getElementById(this.id);
        let switchButton = projItemElement.querySelector('button:last-of-type');
        switchButton = DOMHelper.clearEventListeners(switchButton);
        switchButton.textContent = type === 'active' ? 'Finish' : 'Activate';
        switchButton.addEventListener('click', this.updateProjectsListHandler.bind(null, this.id));
    };

    update(updateProjectListsFunction, type) {
       this.updateProjectsListHandler = updateProjectListsFunction;
       this.connectSwitchButton(type);
    }

}
class ProjectList{

    projects = [];

    constructor(type)
    {
        this.type = type;
        const projItems = document.querySelectorAll(`#${type}-projects li`);
        console.log(projItems);

        for (const projItem of projItems) {
        this.projects.push(new ProjectItem(projItem.id, this.switchProj.bind(this), this.type));
        }

        console.log(this.projects)
    }

    setSwitchHandlerFunction(switchHandlerFunction) {
        this.switchHandler = switchHandlerFunction;
    };

    addProject(project){
        this.projects.push(project);
        DOMHelper.moveElement(project.id, `#${this.type}-projects ul`);
        project.update(this.switchProj.bind(this), this.type);
        
    }

    switchProj(projId){
        console.log(projId);
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
