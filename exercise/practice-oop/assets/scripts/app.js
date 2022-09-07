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

class Component {

    constructor(hostElementId, insertBefore = false){
       if (hostElementId) {
        this.hostElement = document.getElementById(hostElementId);
       } else {
        this.hostElement = document.body;
       }

       this.insertBefore = insertBefore;
    } 

    detach() {
        if (this.element) {
            this.element.remove();
        }
    }

    attach() {
        this.hostElement.insertAdjacentElement(this.insertBefore ? 'afterbegin': 'beforeend', this.element)
    }
}

class Tooltip extends Component {

    constructor(closeNotifierFunction, text) {
        super();
        this.text = text;
        this.closeNotifier = closeNotifierFunction;
        this.create();
    }

    closeTooltip = () => {
        this.detach();
        this.closeNotifier();
    }

    create() {
        const toolTipElement = document.createElement('div');
        toolTipElement.className = 'card-small';
        toolTipElement.textContent = this.text;
        toolTipElement.addEventListener('click', this.closeTooltip);
        this.element = toolTipElement;
    }

    

}
class ProjectItem {
    hasActiveToolTip = false;

    constructor(id, updateProjectListsFunction, type)
    {   
        this.type = type;
        this.updateProjectsListHandler = updateProjectListsFunction;
        this.id = id;
        this.connectMoreInfoButton();
        this.connectSwitchButton(type);

    }

    showMoreInfoHandler() {

        if (this.hasActiveToolTip) {
            return;
        }

        
        const projectElement = document.getElementById(this.id);
        const tooltipText = projectElement.dataset.extraInfo;
        const toolTip = new Tooltip(() => {
            this.hasActiveToolTip = false;
        }, tooltipText);


        toolTip.attach();
        this.hasActiveToolTip = true;
    }



    connectMoreInfoButton(){
        const projectItemElement = document.getElementById(this.id);
        const showMoreInfoButton = projectItemElement.querySelector('button:first-of-type');

        showMoreInfoButton.addEventListener('click', this.showMoreInfoHandler.bind(this));
    };

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
