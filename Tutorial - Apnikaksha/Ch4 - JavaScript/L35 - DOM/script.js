// Selecting elements
const title = document.getElementById('title');
const description = document.querySelector('.description');
const changeTextButton = document.getElementById('changeTextButton');
const addElementButton = document.getElementById('addElementButton');
const removeElementButton = document.getElementById('removeElementButton');
const container = document.getElementById('container');

// Changing content and styles
changeTextButton.addEventListener('click', () => {
    title.textContent = 'Text Changed!';
    description.style.color = 'blue';
});

// Adding a new element
addElementButton.addEventListener('click', () => {
    const newElement = document.createElement('p');
    newElement.textContent = 'I am a new paragraph!';
    container.appendChild(newElement);
});

// Removing an element
removeElementButton.addEventListener('click', () => {
    if (container.lastChild) {
        container.removeChild(container.lastChild);
    }
});
