import React, { useState } from 'react';

export const useForm = ( initialState = {} ) => {
    
    const [value, setValue] = useState(initialState);

    const reset = () => {
        setValue( initialState );
    }

    // Desestructuración de objeto e.
    const handleInputChange = ({ target }) => {
        setValue({ 
            ...value,
            [target.name]: target.value
        })
    };

    return [value, reset, handleInputChange];
};
