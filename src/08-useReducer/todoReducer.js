

export const todoReducer = (initialState = [], action) => {// Esta funcion no es la que ejecuta la carga inicial, es la funcion de react reducer


    switch (action.type) {
        case '[TODO] Add Todo':
            return [...initialState, action.payload]
        /* throw new Error('Action.type = ABC no esta implementada'); */

        case '[TODO] Remove Todo':
            return initialState.filter(todo => todo.id !== action.payload)

        case '[TODO] Toggle Todo':
            return initialState.map( todo => {
                if (todo.id === action.payload) {
                    return {
                        ...todo,
                        done: !todo.done,
                    }
                }
                console.log(todo)
                return todo;
            })
            


        default:
            return initialState;
    }
}