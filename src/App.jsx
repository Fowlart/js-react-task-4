import React from 'react';
import {Header} from './components/HeadersComponents/Header';
import ErrorBoundaryMainSection from './screens/MainSection/MainSection';
import {Provider} from "react-redux";
import {filmsStore} from "./store/FilmsStore";
import {createServer} from "miragejs";

//Example: fake API
createServer({
    routes() {
        this.get("/api/films", () => [
            {
                id: "card-1",
                name: "The Fight Club",
                release: 1999,
                genre: "comedy",
                img: "https://m.media-amazon.com/images/I/619QNhZ+3EL.jpg",
                textColor: "red"
            },
            {
                id: "card-2",
                name: "How Universe Works",
                release: 2010,
                genre: "documentary",
                img: "https://images-na.ssl-images-amazon.com/images/I/916vvt9cjQL._SY445_.jpg",
                textColor: "white"
            },
            {
                id: "card-3",
                name: "Alien",
                release: 1979,
                genre: "horror",
                img: "https://geekireland.com/wp-content/uploads/2017/09/alien-1979-xenomorph.jpg",
                textColor: "red"
            },
            {
                id: "card-4",
                name: "Best Film",
                genre: "crime",
                release: 2001,
            }
        ])
    },
})

function App() {
    return (
        <React.StrictMode>
            <Provider store={filmsStore}>
                <Header/>
                <ErrorBoundaryMainSection/>
            </Provider>
        </React.StrictMode>
    );
}

export default App;
