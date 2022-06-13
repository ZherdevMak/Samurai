import React, {useState} from 'react';
import './App.css';
import Accordion from './components/Accordion';
import {Rating, ValueType} from "./components/Rating";
// import {OnOff} from "./components/OnOFF/OnOff";
import {UncontrolledRating} from "./components/uncontrolledRating/uncontrolledRating";
import {UncontrolledAccordion} from "./components/uncontrolledAccordion/UncontrolledAccordion";
import {UncontrolledOnOff} from "./components/UncontrolledOnOff/UncontrolledOnOff";

function App() {
    let [collapsed, setCollapsed] = useState<boolean>(false)
    let [position, setPosition] = useState<boolean>(false)
    let [value, setValue] = useState<ValueType>(0)
    const accordionCollapsed = ()=> {setCollapsed(!collapsed)}
    const ToggleOn = ()=> {setPosition(true)}
    const ToggleOff = ()=> {setPosition(false)}
    const onClickFunction = (v: ValueType) => { setValue(v)}
    return (
        <div className={'App'}>
            {/*<PageTitle title = {"This is APP component"}/>*/}
            {/*<PageTitle title ={"My friends"}/>*/}
            {/*Article 1*/}
            {/*<Rating value={3} />*/}
            {/*<OnOff position={position} ToggleOn={ToggleOn} ToggleOff={ToggleOff} />*/}
            <UncontrolledOnOff/>
            {/*<Accordion title={"My Accordion"} callBack={accordionCollapsed} collapsed = {collapsed} />*/}
            <UncontrolledAccordion title={"My UncontrolledAccordion"}/>
            {/*Article 2*/}
            {/*<UncontrolledRating />*/}
            <Rating value={value} callBack = {onClickFunction}/>
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
