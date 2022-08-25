const addMovieButton = document.getElementById('add-movie-btn');
const searchMovieButton = document.getElementById('search-btn');


const movies = [];

const renderMovies = (filter = '') => {     
    const moviesList = document.getElementById('movie-list');

    if (movies.length === 0) {
        moviesList.classList.remove('visible');
        return;
    } else {
        moviesList.classList.add('visible');
    }

    moviesList.innerHTML = '';
    
    const filteredMovies = !filter 
    ? movies 
    : movies.filter(movie => movie.info.title.includes(filter) ); 
    
    filteredMovies.forEach( movie => {
        const movieElement = document.createElement('li');
        let text = movie.info.title + ' - ';

        for(const key in movie.info){
          if(key !== 'title') {
            text = text + `${key}: ${movie.info[key]}`;
          } 
        }
        movieElement.textContent = text;
        moviesList.append(movieElement);
    });

  
};


const addMovieHandler = () => {
    const title = document.getElementById('title').value;
    const extraName = document.getElementById('extra-name').value;
    const extraValue = document.getElementById('extra-value').value;

    if (title.trim() === '' ||
        extraName.trim() === '' ||
        extraValue.trim() === '') {
        
            return ;
    }

    const newMovie = {
        
     info: {
             title,
             [extraName]:extraValue
            },
      id: Math.random()      
    };

    movies.push(newMovie);
    console.log(newMovie);
    renderMovies();
};

const searchMovieHandler = () => {
    const filterTerm = document.getElementById('filter-title').value;
    renderMovies(filterTerm);
  
  }


addMovieButton.addEventListener('click', addMovieHandler);
searchMovieButton.addEventListener('click', searchMovieHandler);