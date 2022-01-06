import React from 'react'
import { useState } from 'react/cjs/react.development'
import PropTypes from 'prop-types';

export const AddCategory = ( { setCategories } ) => {

    //useState del valor que se encuentra en la barra de búsqueda.
    const [inputValue, setInputValue] = useState('');

    //Form llama a esta función cada vez que cambia el valor.
    const handleInputChange = (e) => {
        setInputValue(e.target.value);
    }

    //Form llama a esta función cuando se hace submit (por enter o por botón).
    const handleSubmit = (e) => {
        e.preventDefault();
        if (inputValue.trim().length > 2)
        {
            setCategories( (cats) => [inputValue, ...cats] );
            setInputValue('');
        }
    }

    return (
        <form onSubmit={ handleSubmit }>
            <p> {inputValue} </p>
          <input
                type="text"
                value={inputValue}
                onChange={handleInputChange}
          />
        </form>
    )
}

AddCategory.propTypes = {
    setCategories: PropTypes.func.isRequired,
}
