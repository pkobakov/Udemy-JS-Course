const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');

const movies  = [];

const renderMovieElement = (title, image, rating) => {
  const newMovieElement = document.createElement('li');
  newMovieElement.className = 'movie-element';
  newMovieElement.innerHTML = `
  <div class="movie-element__image">
    <img src="${image}" alt="${title}">
  </div>
  <div class="movie-element__info">
    <h2>${title}</h2>
    <p>${rating}/5</p>
  </div>`;

  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toogleBackdrop = () => {
  backdrop.classList.toggle('visible');
}

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }

};

const toggleMovieModal = () => {
  addMovieModal.classList.toggle('visible');
  toogleBackdrop();
};

const clearMovieInputs = () => {
  for (const input of userInputs) {
    input.value = '';
  }
}

const cancelAddMovieHandler = () => {
  clearMovieInputs();
  toggleMovieModal();
  
}; 

const backdropClickHandler = () => {
 toggleMovieModal();
};

const addMovieHandler = () => {
  const titleValue = userInputs[0].value;
  const imageUrlValue = userInputs[1].value;
  const ratingValue = userInputs[2].value;

  if (titleValue.trim() === '' ||
      imageUrlValue.trim() === '' ||
      ratingValue.trim() === '' ||
      +ratingValue < 1 ||
      +ratingValue > 5) {
    
        alert('Please enter valid values (rating must be between 1 and 5).');
        return; 
  }

  const newMovie = {
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  }

  movies.push(newMovie);

  console.log(movies);
  toggleMovieModal();
  renderMovieElement(newMovie.title, newMovie.image, newMovie.rating);
  updateUI();
  clearMovieInputs();
};

startAddMovieButton.addEventListener('click', toggleMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);