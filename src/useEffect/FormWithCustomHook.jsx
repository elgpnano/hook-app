import { useEffect, useState } from "react"
import { Message } from "./Message";
import { useForm } from "../hooks/useForm";


export const FormWithCustomHook = () => {
    const { formState, onInputChange, resetForm, username, email, password } = useForm({
        username: '',
        email: '',
        password: '',
    });


    return (
        <>
            <h1>Form with Simple Form</h1>
            <hr />

            <input
                type="text"
                className="form-control"
                placeholder="UserName"
                name="username"
                value={username}
                onChange={onInputChange}
            />
            <input
                type="email"
                className="form-control mt-2"
                placeholder="example@email.com"
                name="email"
                value={email}
                onChange={onInputChange}
            />
            <input
                type="password"
                className="form-control mt-2"
                placeholder="Password"
                name="password"
                value={password}
                onChange={onInputChange}
            />

            <button className="btn btn-primary mt2" onClick={resetForm}> Borrar </button>

            {
                (username === 'strider2') && <Message />
            }

        </>

    )
}
