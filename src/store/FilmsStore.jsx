import {createStore} from 'redux'

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

let films = [{
    id: "card-1",
    name: "The Fight Club",
    release: "1999",
    jenre: "comedy, thriller"
},
    {id: "card-2", name: true, release: "Lala", jenre: 1234},{id: "card-3"}];

function filmReducer(state = {filmCount: films.length, films: films}, action) {
    switch (action.type) {
        case 'ADD_FILM':
            return {
                value: state.filmCount + 1,
                films: state.films.push(action.film)
            }
        case 'REMOVE_FILM':
            return {
                value: state.filmCount - 1,
                films: state.films.filter(item => {
                    return (item.id !== action.filmId)
                })
            }
        default:
            return state
    }
}

// Create a Redux store holding the state of your app.
// Its API is { subscribe, dispatch, getState }.
export let filmsStore = createStore(filmReducer);

// You can use subscribe() to update the UI in response to state changes.
// Normally you'd use a view binding library (e.g. React Redux) rather than subscribe() directly.
// There may be additional use cases where it's helpful to subscribe as well.
filmsStore.subscribe(() => console.log("filmsStore state was changed, number of cards: " + filmsStore.getState().value));



