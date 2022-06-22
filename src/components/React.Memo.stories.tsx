import React, {useState} from "react";
import {v1} from "uuid";

export default {
    title:'ReactMemoDemo'
}
const NewUsersCounter = (props:{count:number}) => {
    return <div>{props.count}</div>
}
const UsersSecret = (props: {name:string[]}) => {
    console.log('User')
    return <div>
        {props.name.map(el=> <div key={v1()}>{el}</div>)}
    </div>
}
const Users = React.memo(UsersSecret)
export const Example1 = () => {
    let [counter, setCounter] = useState(10)
    let [users, setUsers] = useState(['Mac','Ura', 'Vitalik'])
    return <div>
        <button onClick={()=> {setCounter(counter+1)}}>+</button>
        <NewUsersCounter count={counter}/>
        <Users name={users}/>
    </div>

}