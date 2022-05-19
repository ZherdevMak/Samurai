import React from 'react';
import './App.css';
import Accordion from './components/Accordion';
import {Rating} from "./components/Rating";

function App() {
    return (
        <div>
            <input/>
            This is APP component
            <Accordion title={"My friends"} collapsed={true} />
            <Rating />
        </div>
    );
}

export default App;
