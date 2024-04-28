import React, { useEffect } from 'react'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'
import { useTodo } from '../hooks/useTodo'


export const TodosApp = () => {
    const {todos, handleNewTodo, handleDeleteTodo ,handleToggleTodo, allTodos, pendingTodos} = useTodo();

    
//todos.filter(todo => !todo.done).length
    return (
        <>
            <h1>Todos App: {allTodos} <small>Pendientes: {pendingTodos}</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={id => handleDeleteTodo(id)}
                        onToggleTodo={id => handleToggleTodo(id)}
                    />
                </div>
                <div className="col-5">
                    <h4>Agregar TODO</h4>
                    <hr />
                    <TodoAdd onNewTodo={todo => handleNewTodo(todo)} />
                </div>
            </div>
        </>
    )
}
