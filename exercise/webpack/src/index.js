import generateJoke from './generateJoke';
import styles from './styles/main.scss';
import logo from './assets/laugh.jpg';

const logoImg = document.getElementById('laughImg');
logoImg.src = logo; 

const button = document.getElementById('jokeBtn');
button.addEventListener('click', generateJoke);

generateJoke();

console.log('Let\'s smile!');