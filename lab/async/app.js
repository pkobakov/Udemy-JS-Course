const button = document.querySelector('button');
const output = document.querySelector('p');

function trackUserHandler() {
  console.log('Clicked!');
}

button.addEventListener('click', trackUserHandler);

let result = 0;


for (let index = 0; index < 1000000000; index++) {
  result+=index;
  
}

console.log(result);