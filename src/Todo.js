import React from 'react'

export default function Todo({todo}) {
    return (
        <div>
            <label>
                <input type="ckeckbox" checked={todo.complete}/>
            {Todo.name}
            </label>
           
        </div>
    )
}
