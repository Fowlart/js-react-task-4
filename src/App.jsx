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
                release: "1999",
                jenre: "comedy, thriller",
                img: "https://m.media-amazon.com/images/I/619QNhZ+3EL.jpg",
                textColor: "coral"
            },
            {id: "card-3"}])
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
