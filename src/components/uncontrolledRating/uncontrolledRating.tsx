import React, {MouseEventHandler, useState} from "react";
export function UncontrolledRating() {
    let [value,setValue] = useState<number>(4)
        return (
            <div>
                <Star selected={value > 0} setValue = {setValue} value={1}/>
                <Star selected={value > 1} setValue = {setValue} value={2} />
                <Star selected={value > 2} setValue = {setValue} value={3}/>
                <Star selected={value > 3} setValue = {setValue} value={4}/>
                <Star selected={value > 4} setValue = {setValue} value={5}/>
            </div>
        )
    }

type StarType = {
    value:number,
    selected: boolean,
    setValue: (value: number) => void
}

function Star(props: StarType) {
        return ( <span onClick={() => props.setValue(props.value)}> {props.selected ? <b>star </b> : "star "}</span>)
}
