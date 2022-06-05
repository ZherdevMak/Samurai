import React, {useState} from "react";

type AccordionPropsType = {
    title: string,

}

function Accordion(props: AccordionPropsType) {
    let [collapsed, setCollapsed] = useState<boolean>(false)
    return (
        <div>
            <h3><AccordionTitle title={props.title}/></h3>
            <button onClick={()=> {setCollapsed(!collapsed)}}>BUTTON</button>
            {!collapsed && <AccordionBody/>}
        </div>
    )

}


function AccordionTitle(props: any) {
    return (
        <div>
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