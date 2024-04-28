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
                            returnDescription = {description => returnDescription(description)}
                            onToggleTodo = {id => onToggleTodo(id)}
                            />
                    ))
                }
            </ul>
        </>
    )
}
