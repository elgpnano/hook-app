import { useRef } from "react"

export const FocusScreen = () => {

    const inputRef = useRef();
    const inputRef2 = useRef();
    const inputRef3 = useRef();

    const onCLick = () => {
        //document.querySelector('input').select();
        inputRef2.current.select();
    }

    return (
        <>
            <h1>FocusScreen</h1>
            <hr />
            <input
                ref={inputRef}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />
            <input
                ref={inputRef2}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />
            <input
                ref={inputRef3}
                type="text"
                placeholder="Ingrese su nombre"
                className="form-control"
            />
            <button className="btn btn-primary mt-2" onClick={onCLick}>
                Set Focus
            </button>
        </>

    )
}
