import React from 'react'
import { TodoItem } from './TodoItem'

export const TodoList = ({ todos = [], onDeleteTodo, returnDescription, onToggleTodo }) => {
    
    return (
        <>
            <ul className='list-group'>
                {
                    todos.map(todo => (
                        <TodoItem
                            key={todo.id}
                            todo={todo}
                            onDeleteTodo={id => onDeleteTodo(id)}
                            onToggleTodo = {id => onToggleTodo(id)}
                            />
                    ))
                }
            </ul>
        </>
    )
}
