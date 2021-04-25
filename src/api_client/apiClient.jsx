
export function fetchMovies() {
    const fetchFilms = (dispatch, getState) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const fetchFilmsUrl = "http://localhost:8000/api/films";

        fetch(fetchFilmsUrl, requestOptions)
            .then(body => body.json())
            .then(films => {
                dispatch({type: 'ADD_INITIAL_DATA', payload: films, isDataInPlace: true})
                // Check the updated store state after dispatching
                const allFilms = getState().films;
                console.log(allFilms);
            });
    };
    return fetchFilms;
}

export function fetchMoviesFiltered(filteredFilmGenre) {
    const fetchFilmsFiltered = (dispatch, getState) => {
        const requestOptions = {
            method: 'GET',
            redirect: 'follow'
        };

        const fetchFilmsUrl = "http://localhost:8000/api/films";

        fetch(fetchFilmsUrl, requestOptions)
            .then(body => body.json())
            .then(films => {
                let filteredFilms = films.filter(film => film.genre === filteredFilmGenre);
                dispatch({type: 'ADD_INITIAL_DATA', payload: filteredFilms, isDataInPlace: true})
            });
    };
    return fetchFilmsFiltered;
}
