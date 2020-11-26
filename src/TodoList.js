//install ES7 react/redux snipets
//rfc and enter to get direct imports and it creates function component

import React from 'react'
import Todo from './Todo'

export default function TodoList({todos}) {
    return (
        todos.map(todo => {
            return <Todo key={todo} todo={todo}/>
        })
        // <div>
        //     Hello World 
        //      {todos.length} prints no.of todos
        // </div>
    )
}
