import React, { useState } from 'react'
import { TodosApp } from './TodosApp'
import { useForm } from '../hooks/useForm'

export const TodoAdd = ({ onNewTodo }) => {

    const { description, onInputChange, resetForm } = useForm({
        description: "",
    });

    const onFormSubmit = (event) => {
        
        event.preventDefault();
        if (description.length <= 1) return;        
        const newTodo = {
            id: new Date().getTime(),
            done: false,
            description: description,
        }
        
        onNewTodo(newTodo);
        resetForm();
    }

    return (
                  
            <form onSubmit={onFormSubmit}> 
                <input
                    type="text"
                    placeholder='Que hay que hacer amigo?'
                    className='form-control'
                    name="description"                    
                    value={description}
                    onChange={onInputChange}
                />
                <button
                    type='submit'
                    className='btn btn-outline-primary mt-2'
                >
                    Programar Tarea
                </button>
            </form>
    )
}
