const addMovieModal = document.getElementById('add-modal');
const startAddMovieButton = document.querySelector('header button');
const backdrop = document.getElementById('backdrop');
// const backdrop = document.body.firstElementChild;
const cancelAddMovieButton = addMovieModal.querySelector('.btn--passive');
const confirmAddMovieButton = cancelAddMovieButton.nextElementSibling;
const userInputs = addMovieModal.querySelectorAll('input');
const entryTextSection = document.getElementById('entry-text');
const deleteMovieModal = document.getElementById('delete-modal');

const movies  = [];

const renderMovieElement = (id, title, image, rating) => {
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

  newMovieElement.addEventListener('click', deleteMovieHandler.bind(null, id));

  const listRoot = document.getElementById('movie-list');
  listRoot.append(newMovieElement);
};

const toggleBackdrop = () => {
  backdrop.classList.toggle('visible');
}

const updateUI = () => {
  if (movies.length === 0) {
    entryTextSection.style.display = 'block';
  } else {
    entryTextSection.style.display = 'none';
  }

};

const cancelMovieModalDeletion = () => {
  toggleBackdrop();
  deleteMovieModal.classList.remove('visible');
}

const deleteMovie = movieId => {

  let movieIndex = 0;

  for (const movie of movies) {
    if (movieId === movie.id) {
      break;
    }
    movieIndex++;
  }

  movies.splice(movieIndex, 1);
  document.getElementById('movie-list').children[movieIndex].remove();
}

const deleteMovieHandler = movieId => {

  
  deleteMovieModal.classList.add('visible');
  toggleBackdrop();
  //deleteMovie(movieId);
};

const showMovieModal = () => {
  addMovieModal.classList.add('visible');
  toggleBackdrop();
};

const closeMovieModal = () => {
  addMovieModal.classList.remove('visible');
};

const clearMovieInputs = () => {
  for (const input of userInputs) {
    input.value = '';
  }
}

const cancelAddMovieHandler = () => {
  clearMovieInputs();
  closeMovieModal();
  
}; 

const backdropClickHandler = () => {
 closeMovieModal();
 cancelMovieModalDeletion();
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
    id: Math.random().toString(),
    title: titleValue,
    image: imageUrlValue,
    rating: ratingValue
  }

  movies.push(newMovie);

  console.log(movies);
  closeMovieModal();
  toggleBackdrop();
  renderMovieElement(
    newMovie.id,
    newMovie.title,
    newMovie.image,
    newMovie.rating);
  updateUI();
  clearMovieInputs();
};

startAddMovieButton.addEventListener('click', showMovieModal);
backdrop.addEventListener('click', backdropClickHandler);
cancelAddMovieButton.addEventListener('click', cancelAddMovieHandler);
confirmAddMovieButton.addEventListener('click', addMovieHandler);