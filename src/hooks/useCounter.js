import { useState } from "react"

export const useCounter = (initial = 10) => {

    const [counter, setCounter] = useState(initial)

    const increment = (value) => {
        setCounter(counter + value)
    }
    const reset = () => {
        setCounter(initial)
    }
    const decrement = ( value ) => {
        
        setCounter(counter - value)
    }

    return {
        counter: counter,
        increment,
        reset,
        decrement
    }
}