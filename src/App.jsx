import React, {useState} from 'react';
import Header from './screens/Header';
import ErrorBoundaryMainSection from './screens/MainSection';


const Button = (props) => {

    let returnedArray = useState("Click to catch zen");
    var buttonTwoText = returnedArray[0];
    var setText = returnedArray[1];

    function handleClick() {
        setText("ZEN!");
    }

    return (<button onClick={handleClick} className={props.className}>{buttonTwoText}</button>);

};

function App() {

    return (
        <React.StrictMode>
            <Header/>
            <ErrorBoundaryMainSection/>
        </React.StrictMode>
    );
}

export default App;
