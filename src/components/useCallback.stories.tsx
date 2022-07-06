import React, {useCallback, useMemo, useState} from "react";
import {v1} from "uuid";

export default {
    title: 'ReactMemoDemo'
}

const NewUsersCounter = (props: { count: number }) => {
    return <div>{props.count}</div>
}
type BooksSecretType = {
    name: string[],
    addBook: () => void
}
const BooksSecret = (props: BooksSecretType) => {
    console.log('User')
    return <div>
        <button onClick={props.addBook}>+</button>
        {props.name.map(el => <div key={v1()}>{el}</div>)}
    </div>
}


export const Example2 = () => {

    let [counter, setCounter] = useState(10)
    let [books, setBooks] = useState(['React', 'Js', 'Git'])


    const BooksMemo = useMemo(() => {
        return () => {
            let newBook = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBook)
        }}, [books]
    )
    const BooksMemo2 = useCallback(() => {
        let newBook = [...books, 'Angular' + new Date().getTime()]
            setBooks(newBook)
        }, [books])

    return <div>
        <button onClick={() => {
            setCounter(counter + 1)
        }}>+
        </button>
        <NewUsersCounter count={counter}/>
        <Books name={books} addBook={BooksMemo2}/>
    </div>
}
const Books = React.memo(BooksSecret)