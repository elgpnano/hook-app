import { useState } from "react"

export const useCounter = (initial = 10) => {

    const [counter, setCounter] = useState(initial)

    const increment = (value = 1) => {
        setCounter(counter + value)
    }
    const reset = () => {
        setCounter(initial)
    }
    const decrement = ( value = 1) => {       
        setCounter(counter - value)
    }

    return {
        counter: counter,
        increment,
        reset,
        decrement
    }
}