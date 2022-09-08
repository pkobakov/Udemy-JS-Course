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

//Capturing phases of nested events:

const button = document.querySelector('button');
button.addEventListener('click', (event) => {
    console.log('BUTTON CLICKED');
    console.log(event);
})

const div = document.querySelector('div');
div.addEventListener('click', (event) => {
    console.log('DIV CLICKED');
    console.log(event)
},true) //Capturing phase set to true will invoke the div event first;







