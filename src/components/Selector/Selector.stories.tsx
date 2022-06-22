import React, {FormEvent, useState} from 'react';
import {action} from "@storybook/addon-actions";
import Selector from "./Selector";


export default {
  title: 'Select',
  component: Selector
}
export type VluesType = {
  value:string
  title: string
}
const arreyValues = [
  {value:"1", title: 'Moscow'},
  {value:"2", title: 'Kiev'},
  {value:"3", title: 'Minsk'}
]
// const callBack = action('event')

const callBack = action('event')
export const sel = () => <Selector  arreyValues = {arreyValues} callBack={callBack}  />



