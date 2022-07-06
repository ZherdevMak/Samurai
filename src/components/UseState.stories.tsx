import React, { useState} from "react";

export default {
    title:'useState demo'
}
const GenereteData = ()=> {

    console.log('1')
    return 24242 * 34
}
export const Example1 = () => {



    let [counter, setCounter] = useState(GenereteData)

    return <div>
        <button onClick={()=> {setCounter(counter+1)}}>+</button>
        {counter}
    </div>

}