import React, { useEffect, useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'


const initialState = []

const init = () => {
    return JSON.parse(localStorage.getItem('todos') || [])
}

export const TodosApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, initialState, init);

    const handleNewTodo = (todo) => {
        const action = {
            type: '[TODO] Add Todo',
            payload: todo,
        }
        dispatch(action);
    }

    const handleDeleteTodo = (id) => {
        
        const action = {
            type: '[TODO] Remove Todo',
            payload: id,
        }
        dispatch(action);
    }
    const handleToggleTodo = (id) => {
       
        const action = {
            type: '[TODO] Toggle Todo',
            payload: id,
        }
        dispatch(action);
    }

    const printDescription = (description) => {
        //console.log(description)
    }



    useEffect(() => {
        localStorage.setItem('todos', JSON.stringify(todos))
    }, [todos])


    return (
        <>
            <h1>Todos App: 10 <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList
                        todos={todos}
                        onDeleteTodo={id => handleDeleteTodo(id)}
                        returnDescription={(description => printDescription(description))}
                        onToggleTodo = {id => handleToggleTodo(id)}
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
