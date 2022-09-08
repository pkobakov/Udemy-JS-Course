const buttons = document.querySelectorAll('button');

const buttonClickHandler = event => {
    // event.target.disabled = true;
    console.log(event);
}

const anotherButtonClickHandler = () => {
    console.log('Button was clicked');
}
// button.onclick = buttonClickHandler();

const boundFn = buttonClickHandler.bind(this);


// button.addEventListener('click', buttonClickHandler);

// setTimeout(() => {button.removeEventListener('click', buttonClickHandler); 
// }, 2000);

// buttons.forEach(btn => {
//     btn.addEventListener('click', buttonClickHandler);
// });

// window.addEventListener('scroll', event => {console.log(event)});

const form = document.querySelector('form');
form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(event);
});

//Propagation

// const clickMeButton = document.querySelector('button');
// clickMeButton.addEventListener('click', (event) => {
//     // event.stopPropagation();
//     console.log('BUTTON CLICKED');
//     console.log(event);
// });

// const clickMeTooButton = document.querySelector('button:last-of-type');
// clickMeTooButton.addEventListener('click', event => {
//     // event.stopImmediatePropagation();
//     console.log('ME TOO BUTTON CLICKED');
//     console.log(event);
// })

// const div = document.querySelector('div');
// div.addEventListener('click', (event) => {
//     console.log('DIV CLICKED');
//     console.log(event);
// });


// const listItems = document.querySelectorAll('li');

// listItems.forEach(listItem => {
//     listItem.addEventListener('click', event => {
//         event.target.classList.toggle('highlight');
//     });
// });

// Event Delegation Pattern:

const list = document.querySelector('ul');
list.addEventListener('click', event => {
    event.target.closest('li').classList.toggle('highlight');
});










