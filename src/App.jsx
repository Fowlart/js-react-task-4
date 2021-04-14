import React from 'react';
import {Header} from './components/HeadersComponents/Header';
import ErrorBoundaryMainSection from './screens/MainSection/MainSection';
import {Provider} from "react-redux";
import {filmsStore} from "./store/FilmsStore";

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
