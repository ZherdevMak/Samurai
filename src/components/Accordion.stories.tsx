import React, {useState} from 'react';
import Accordion from "./Accordion";
import {action} from "@storybook/addon-actions";


export default {
  title: 'Accordion',
  component: Accordion,
}
const callBack = action('event')
export const AccordionUncollapsedMode = () => <Accordion title={'menu'} collapsed={false} callBack={callBack} />
export const AccordionCollapsedMode = () => <Accordion title={'user'} collapsed={true} callBack={callBack} />
export const AccordionModes = () => {
    let [collapsed,setCollapsed] = useState<boolean>(true)
  return <Accordion  title={'Users'} collapsed={collapsed} callBack={() =>setCollapsed(!collapsed)} />
}
