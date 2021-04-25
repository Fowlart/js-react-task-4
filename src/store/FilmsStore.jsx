import {applyMiddleware, compose, createStore} from 'redux'

/**
 * This is a reducer - a function that takes a current state value and an
 * action object describing "what happened", and returns a new state value.
 * A reducer's function signature is: (state, action) => newState
 *
 * The Redux state should contain only plain JS objects, arrays, and primitives.
 * The root state value is usually an object.  It's important that you should
 * not mutate the state object, but return a new object if the state changes.
 *
 * You can use any conditional logic you want in a reducer. In this example,
 * we use a switch statement, but it's not required.
 */

function filmReducer(state = {filmCount: 0, films: [],isDataInPlace: false}, action) {
    switch (action.type) {
        case 'ADD_INITIAL_DATA':
            return {
                ...state,
                filmCount: action.payload.length,
                films: action.payload,
                isDataInPlace: action.isDataInPlace
            }
        case 'REMOVE_FILM':
            return {
                ...state,
                filmCount: state.filmCount - 1,
                films: state.films.filter(item => {
                    return (item.id !== action.filmId)
                })
            }
        case 'ADD_FILM':
            let newFilms = state.films.concat(action.payload);
            return {
                ...state,
                filmCount: state.filmCount + 1,
                films: newFilms
            }
        case 'EDIT_FILM':
            // {id: "card-2", name: true, release: "Lala", genre: 1234}
            // let newFilmsArray = state.films
            //     .filter(film => {return (action.deletedCardId!==film.id)})
            //     .concat(action.payload);
            let newFilmsArr = [...state.films];
            newFilmsArr.forEach( film => {
                if (film.id === action.payload.id) {
                    film = action.payload;
                }
            });
            console.log(newFilmsArr);

            return {
                ...state,
                films: newFilmsArr
            }
        default:
            return state
    }
}

const asyncFunctionMiddleware = filmsStore => next => action => {
    // If the "action" is actually a function instead...
    if (typeof action === 'function') {
        // then call the function and pass `dispatch` and `getState` as arguments
        return action(filmsStore.dispatch, filmsStore.getState)
    }
    // Otherwise, it's a normal action - send it onwards
    return next(action)
}

const middlewareEnhancer = applyMiddleware(asyncFunctionMiddleware);



// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export const filmsStore = createStore(filmReducer, compose(middlewareEnhancer,
    window.devToolsExtension ? window.devToolsExtension() : f => f));

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.
filmsStore.subscribe(() =>
    console.log("FilmsStore state was changed, number of cards: " + filmsStore.getState().filmCount)
);





