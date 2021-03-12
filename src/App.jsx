import React from 'react';
import {Header} from './screens/Header';
import ErrorBoundaryMainSection from './screens/MainSection';

function App() {

    return (
        <React.StrictMode>
            <Header/>
            <ErrorBoundaryMainSection/>
        </React.StrictMode>
    );
}

export default App;
