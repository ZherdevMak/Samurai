import React, {useState} from 'react';
import {OnOff} from './OnOff';
import {action} from "@storybook/addon-actions";


export default {
  title: 'OnOffButton',
  component: OnOff,
}
const callBack = action('event')
export const OnMode = () => <OnOff position={true} ToggleOn={callBack} ToggleOff={callBack} />
export const OffMode = () => <OnOff position={false} ToggleOn={callBack} ToggleOff={callBack} />
export const OnOffModes = () => {
    let [position,setposition] = useState<boolean>(false)
  return <OnOff  position={position} ToggleOn={()=> {setposition(true)}} ToggleOff = {()=> {setposition(false)}} />
}
