import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion';
import {Rating} from "./components/Rating";
import {OnOff} from "./components/OnOFF/OnOff";
import {UncontrolledRating} from "./components/uncontrolledRating/uncontrolledRating";

function App() {
    let [position, setPosition] = useState<boolean>(false)
    const ToggleOn = ()=> {setPosition(true)}
    const ToggleOff = ()=> {setPosition(false)}
    return (
        <div className={'App'}>
            {/*<PageTitle title = {"This is APP component"}/>*/}
            {/*<PageTitle title ={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3} />*/}
            <OnOff position={position} ToggleOn={ToggleOn} ToggleOff={ToggleOff} />
            <Accordion title={"My Accordion"} />
            {/*Article 2*/}
            <UncontrolledRating />
            {/*<Rating value={0} />*/}
            {/*<Rating value={1} />*/}
            {/*<Rating value={2} />*/}
            {/*<Rating value={3} />*/}
            {/*<Rating value={4} />*/}
            {/*<Rating value={5} />*/}
        </div>
    );
}
type PageTitlePropsType = {
    title: string
}
function PageTitle(props: PageTitlePropsType) {
    return <h1>{props.title}</h1>
}
export default App;
