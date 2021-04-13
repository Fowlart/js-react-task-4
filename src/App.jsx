import React from 'react';
import {Header} from './components/HeadersComponents/Header';
import ErrorBoundaryMainSection from './screens/MainSection/MainSection';

function App() {
    return (
        <React.StrictMode>
            <Header/>
            <ErrorBoundaryMainSection/>
        </React.StrictMode>
    );
}

export default App;
