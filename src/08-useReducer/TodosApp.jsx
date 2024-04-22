import React, { useReducer } from 'react'
import { todoReducer } from './todoReducer'
import { TodoList } from './TodoList'
import { TodoAdd } from './TodoAdd'


const initialState = [
    {
        id: new Date().getTime(),
        description: 'Recolectar la priedra del Alma',
        done: false,
    },
    {
        id: new Date().getTime() * 3,
        description: 'Recolectar la priedra del Poder',
        done: false,
    }
]


export const TodosApp = () => {


    const [todos, dispatch] = useReducer(todoReducer, initialState);
     
    const handleNewTodo = (todo) => {
        /* console.log({ todo }); */
    }

    return (
        <>
            <h1>Todos App: 10 <small>Pendientes: 2</small></h1>
            <hr />

            <div className="row">
                <div className="col-7">
                    <TodoList todos={todos} />
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
