function showTemplate() {
    const template = document.getElementById('template-info');
    const clone = template.content.cloneNode(true);
    document.body.appendChild(clone);
}

const button = document.getElementById('button');
button.addEventListener('click', showTemplate);
