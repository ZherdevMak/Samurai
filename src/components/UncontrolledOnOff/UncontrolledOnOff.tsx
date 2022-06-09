
import * as React from 'react';
import  stl from '../OnOFF/Tab.module.css'
import {useState} from "react";




export const UncontrolledOnOff = () => {
    let [position, setPosition] = useState<boolean>(false)
    const ToggleOn = ()=> {setPosition(true)}
    const ToggleOff = ()=> {setPosition(false)}
    let onLight;
    let offLight;
    let lampColor;
    if (position) {
        onLight = `${stl.on} ${stl.active}`;
    offLight = stl.off;
    lampColor = stl.lampgreen;
    } else { onLight = stl.on;
        offLight = `${stl.off} ${stl.active}`;
        lampColor = stl.lampred
    }
    return (
        <div className={stl.setOn}>
            <div onClick={ToggleOn} className={onLight}>ON</div>
            <div onClick={ToggleOff} className={offLight}>OFF</div>
            <div className={lampColor}></div>
        </div>
    );
};
