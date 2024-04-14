import { useCounter } from '../hooks/useCounter'

export const CounterWhitCustomHook = () => {

  const { counter, increment, reset, decrement } = useCounter();
  
  return (
    <>
    <h1>Counter Whit Custon Hook: {counter} </h1>
    <hr />
    <button className="btn btn-primary" onClick={() => increment(2)}>+1</button>
    <button className="btn btn-primary" onClick={reset}>Reset</button>
    <button className="btn btn-primary" onClick={(event)=>decrement(3)}>-1</button>
    </>
  )
}

