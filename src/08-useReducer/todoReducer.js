

export const todoReducer = (initialState = [], action) => {// Esta funcion no es la que ejecuta la carga inicial, es la funcion de react reducer
    
    
    switch (action.type) {
        case 'ABC':
            throw new Error('Action.type = ABC no esta implementada');

        default:
            return initialState;
    }
}