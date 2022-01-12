import React, { useEffect, useState } from 'react';
import './effects.css';
import {Message} from './Message';

export const SimpleForm = () => {
    
    const [formState, setFormState] = useState({
        name: '',
        email: ''
    });

    const { name, email } = formState;

    // Al mandar el arreglo vacío como segundo argumento, solo se ejecuta una vez el efecto. 
    // Dentro del arreglo se ingresan los elementos que cuando sufren un cambio ejecutan el efecto.
    useEffect( () => {
        // console.log('prueba');
    }, [] );

    //Este useEffect escucha cuando formState cambié para ejecutar el efecto.
    useEffect( () => {
        // console.log('formState cambió');
    }, [ formState ]);

    //Este useEffect escucha cada vez que cambia el email.
    useEffect( () => {
        // console.log('email cambió');
    }, [ email ]);

    // Desustructuración del target del evento.
    const handleInputChange = ( { target } ) => {

        setFormState({
            ...formState,
            [target.name] : target.value
        });
    
    };

    return (
        <>
            <h1>useEffect</h1>
            <hr />

            <div className='form-group'>
                <input 
                    type="text"
                    name="name"
                    className="form-control"
                    placeholder="Tu nombre"
                    value={ name }
                    onChange={ handleInputChange }
                />
            </div>

            <div className='form-group'>
                <input 
                    type="text"
                    name="email"
                    className="form-control"
                    placeholder="Tu email"
                    value={ email }
                    onChange={ handleInputChange }
                />
            </div>

            { (name === '123') && <Message />}
        </>
    )

};