import React, {useState} from "react";

type AccordionPropsType = {
    title: string,
    callBack: ()=>void
    collapsed: boolean

}

function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <h3><AccordionTitle title={props.title} onClick={props.callBack}/></h3>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitle = {
    onClick: () => void
    title: string
}

function AccordionTitle(props: AccordionTitle) {
    return (
        <div onClick={() => props.onClick()} >
            <li>{props.title}</li>

        </div>
    )
}

function AccordionBody() {
    return (
        <div>

            <ul>
                <li>1</li>
                <li>2</li>
                <li>3</li>
                <li>4</li>
            </ul>
        </div>
    )
}

export default Accordion