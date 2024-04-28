import React from 'react'

export const TodoItem = ({ todo, onDeleteTodo, returnDescription, onToggleTodo }) => {

    return (
        <>
            <li key={todo.id} className='list-group-item d-flex justify-content-between'>
                    <input  className="form-check-input" type="checkbox" value="" id="flexCheckIndeterminate" checked={todo.done} readOnly/>
                <span

                    className={`align-self-center ${(todo.done) ? 'text-decoration-line-through': ''}`}
                    onClick={() => onToggleTodo(todo.id)}
                >{todo.description}</span>
                <button
                    className='btn btn-danger'
                    onClick={() => { onDeleteTodo(todo.id); returnDescription(todo.description) }}
                >Borrar</button>
            </li>
        </>
    )
}
