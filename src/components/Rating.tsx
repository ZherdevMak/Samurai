import React from "react";
export type ValueType = 0 | 1 | 2 | 3 | 4 | 5
type RatingPropsType = {
    value: ValueType
    callBack: (v:ValueType) => void
}

export function Rating(props: RatingPropsType) {
    return (
        <div>
            <Star selected={props.value > 0} onClick = {() => props.callBack(1)}/>
            <Star selected={props.value > 1} onClick = {() => props.callBack(2)}/>
            <Star selected={props.value > 2} onClick = {() => props.callBack(3)}/>
            <Star selected={props.value > 3} onClick = {() => props.callBack(4)}/>
            <Star selected={props.value > 4} onClick = {() => props.callBack(5)}/>
        </div>
    )
}

type StarType = {
    selected: boolean,
    onClick: () => void
}


function Star(props: StarType) {
    return (<span onClick={props.onClick}> {props.selected ? <b>star </b> : "star "}</span>)
}