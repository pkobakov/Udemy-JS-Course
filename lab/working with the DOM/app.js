// const listItemElements = document.querySelectorAll('li');
const listItemElements = document.getElementsByTagName('li');
const button = document.querySelector('button');
const section = document.querySelector('section');

const h1 = document.getElementById('main-title');
h1.textContent = 'Hello World';
h1.style.color = 'white';
h1.style.backgroundColor = 'teal';




const li = document.querySelector('li:last-of-type');
li.textContent = li.textContent + ' (Changed!)';
for (const item of listItemElements) {
    console.log(item);
}


button.addEventListener('click', () => {
    section.classList.toggle('visible');
    section.classList.toggle('invisible');
} )
