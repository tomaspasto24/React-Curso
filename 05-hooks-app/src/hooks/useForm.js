import { useState } from "react/cjs/react.development"


export const useForm = ( initialState = {} ) => {

    const [formValues, setFormValues] = useState(initialState);

    // Desustructuración del target del evento que se ingresa.
    const handleInputChange = ( {target} ) => 
    {
        setFormValues({
            ...formValues,
            [target.name]: target.value
        });
    };

    return [ formValues, handleInputChange ];

};
