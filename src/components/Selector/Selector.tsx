import React, {ChangeEvent, ChangeEventHandler, FormEvent, FormEventHandler} from 'react';
import {VluesType} from "./Selector.stories";
import {v1} from "uuid";

type SelectorType = {
    arreyValues: VluesType[]
    callBack: (val:ChangeEvent<HTMLSelectElement>)=>void
}
const arreyValues = [
    {value:"1", title: 'Moscow'},
    {value:"2", title: 'Kiev'},
    {value:"3", title: 'Minsk'}
]

const Selector = (props:SelectorType) => {


    return (
        <div>
            <select onChange={props.callBack} name="cities" id="1">
                {arreyValues.map(el => <option key={v1()} value={el.value} >{el.title}</option>)}
            </select>
        </div>
    );
};

export default Selector;