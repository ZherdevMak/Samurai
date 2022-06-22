// @flow
import * as React from 'react';
import  stl from './Tab.module.css'
import {MouseEvent} from 'react'
type OnOffProps = {
    position: boolean,
    ToggleOn: (e:MouseEvent<HTMLDivElement> ) => void,
    ToggleOff: ()=> void
};

export const OnOff = (props: OnOffProps) => {
    let onLight;
    let offLight;
    let lampColor;
    if (props.position) {
        onLight = `${stl.on} ${stl.active}`;
    offLight = stl.off;
    lampColor = stl.lampgreen;
    } else { onLight = stl.on;
        offLight = `${stl.off} ${stl.active}`;
        lampColor = stl.lampred
    }
    return (
        <div className={stl.setOn}>
            <div onClick={(e)=>props.ToggleOn(e)} className={onLight}>ON</div>
            <div onClick={props.ToggleOff} className={offLight}>OFF</div>
            <div className={lampColor}></div>
        </div>
    );
};
