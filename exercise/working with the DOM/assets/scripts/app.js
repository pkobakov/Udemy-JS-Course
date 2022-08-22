const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;

const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');

const toogleBackdrop = () => {
  backdrop.classList.toggle('visible');
}

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toogleBackdrop();
};

const cancelAddMovie = () => {
  toggleMovieModal();
}; 



const backdropClickHandler = () => {
 toggleMovieModal();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', toggleMovieModal);
cancelAddMovieButton.addEventListener('click', cancelAddMovie);