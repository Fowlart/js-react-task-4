import {useState} from "react";


export const useMocks = () => {

    const [films, setFilms] = useState([{
        id: "card-1",
        name: "The Fight Club",
        release: "1999",
        jenre: "comedy, thriller"
    },
        {id: "card-2", name: "Venom", release: "2018", jenre: "action, horror, science fiction"},
        {id: "card-3", name: true, release: "Lala", jenre: 1234},{id: "card-4", name: true, release: "Lala", jenre: 1234}]);

    return ([
        films, (film) => {
            // add to array function
            let newFilms = films.slice();
            newFilms.push(film);
            setFilms(newFilms);
            console.log(newFilms);
            console.log(films);
        },
        (id) => {
            // remove film function
            console.log(id);
            let newFilms = films.filter(item=>{ return (item.id !==id)});
            setFilms(newFilms);
            console.log(newFilms);
            console.log(films);
        }
    ])
}
