import React, {useState} from "react";

type AccordionPropsType = {
    title: string,

}

export function UncontrolledAccordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <div>
            <h3><AccordionTitle title={props.title} onClick={()=> {setCollapsed(!collapsed)}}/></h3>
            {!collapsed && <AccordionBody/>}
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