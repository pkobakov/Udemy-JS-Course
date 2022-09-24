import generateJoke from './generateJoke';
import styles from './styles/main.scss';
import logo from './assets/logo.jpg';

const logoImg = document.getElementById('logoImg');
logoImg.src = logo; 


console.log('Hello World!');
console.log(generateJoke());