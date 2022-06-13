import React from "react";

type AccordionPropsType = {
    title: string,
    callBack: ()=>void
    collapsed: boolean

}

export function Accordion(props: AccordionPropsType) {

    return (
        <div>
            <h3><AccordionTitle title={props.title} onClick= {props.callBack}/></h3>
            {!props.collapsed && <AccordionBody/>}
        </div>
    )

}

type AccordionTitleProps = {
    onClick: () => void
    title: string
}

function AccordionTitle(props: AccordionTitleProps) {
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