let containerId = 0;

function addTaskContainer() {
    containerId++;
    let containerWrapper = document.getElementById('containerWrapper');

    let newContainer = document.createElement('div');
    newContainer.className = 'task-container'; //css
    newContainer.id = 'container' + containerId; //function

    let titleInput = document.createElement('input');
    titleInput.type = 'text';
    titleInput.className = 'task-input';
    titleInput.placeholder = 'Title';

    let titleInput2 = document.createElement('input');
    titleInput2.type = 'text';
    titleInput2.className = 'task-input';
    titleInput2.placeholder = 'Title';

    let dateInput = document.createElement('input');
    dateInput.type = 'date';
    dateInput.className = 'task-input';
    dateInput.placeholder = 'Date';

    let descriptionInput = document.createElement('textarea');
    descriptionInput.className = 'task-input';
    descriptionInput.placeholder = 'Description';

    let addContentButton = document.createElement('button');
    addContentButton.className = 'add-content-button';
    addContentButton.textContent = 'Add Content';
    addContentButton.onclick = function() {
        addContent(newContainer.id, titleInput.value, dateInput.value, descriptionInput.value);
    };

    let deleteContainerButton = document.createElement('button');
    deleteContainerButton.className = 'delete-container-button';
    deleteContainerButton.textContent = 'Delete';
    deleteContainerButton.onclick = function() {
        deleteContainer(newContainer.id);
    };

    newContainer.appendChild(titleInput);
    newContainer.appendChild(dateInput);
    newContainer.appendChild(descriptionInput);
    newContainer.appendChild(addContentButton);
    newContainer.appendChild(deleteContainerButton); 
    containerWrapper.appendChild(newContainer); //tek deger

}

function addContent(containerId, title, date, description) {
    let container = document.getElementById(containerId);

    let content = document.createElement('div');
    content.className = 'content';

    let titleP = document.createElement('p');
    titleP.textContent = 'Title: ' + title;

    let dateP = document.createElement('p');
    dateP.textContent = 'Date: ' + date;

    let descriptionP = document.createElement('p');
    descriptionP.textContent = 'Description: ' + description;

    let deleteButton = document.createElement('button');
    deleteButton.className = 'delete-content-button';
    deleteButton.textContent = 'Delete';
    deleteButton.onclick = function() {
        deleteContent(containerId, content);
    };

    content.appendChild(titleP);
    content.appendChild(dateP);
    content.appendChild(descriptionP);
    content.appendChild(deleteButton);
    container.appendChild(content);//sor
}

function deleteContent(containerId, content) {
    let container = document.getElementById(containerId);
    container.removeChild(content);//sor
}

function deleteContainer(containerId) {
    let container = document.getElementById(containerId);
    container.parentNode.removeChild(container);// sor
}