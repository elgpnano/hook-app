import React, { useCallback, useEffect } from 'react'
import { useState } from 'react'
import { ShowIncrement } from './ShowIncrement'

export const CallBackHook = () => {

    const [counter, setCounter] = useState(10)

    const incrementFather = useCallback(
        (value = 1) => {
            console.log(value)
            setCounter((c) => c + value)
        }, [],
    );

    useEffect(() => {
    incrementFather();
    }, [incrementFather])
    

    return (
        <>
            <h1>Use CallBack Hook: {counter}</h1>
            <hr />

            <ShowIncrement increment={incrementFather} />
        </>

    )
}
