import { useState } from "react";

export const useForm = (initialForm = {}) => {
    
    const [formState, setFormState] = useState(initialForm);
    const onInputChange = ({ target }) => {
        const { name, value } = target;
        
        setFormState({
            ...formState,
            [name]: value,
        })
    }
    const resetForm = () => {
        setFormState( initialForm );
    }

    return {
        ...formState, // Tambien se puede enviar todo el objeto usrename, email, pass y recibe en form with custom form
        formState,
        onInputChange,
        resetForm,
    }
}
