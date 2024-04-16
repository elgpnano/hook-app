import { memo, useEffect, useMemo, useState } from "react";
import { useCounter } from "../hooks/useCounter"
import { Small } from "./Small";


const heavyResours = (iterations= 10 ) =>{
    for (let i = 0; i < iterations; i++) {
        console.log('Ahi vamos')
        
    }
   return `${iterations} Iteraciones realizadas`
}


export const MemoHook = () => {

    const { counter, increment } = useCounter(400);
    const [show, setShow] = useState(true)
    const memorizedValue = useMemo(() => heavyResours(counter), [counter])
    

    return (
        <>
            <h1>Counter: <Small value={counter} /> </h1>
            <hr />

            <h4> {memorizedValue}</h4>

            <button
                className="btn btn-primary"
                onClick={() => increment()}
            >+1</button>
            <button
                className="btn btn-primary"
                onClick={()=>setShow(!show)}
            >Show / Hide {JSON.stringify(show)}</button>
        </>
    )
}
