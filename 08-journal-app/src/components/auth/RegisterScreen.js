import React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from '../../hooks/useForm';
import validator from 'validator';
import { useDispatch, useSelector } from 'react-redux';
import { removeError, setError } from '../../actions/ui';
import { startRegisterWithEmailPasswordName } from '../../actions/auth';

export const RegisterScreen = () => {
    
    const [ FormValues, handleInputChange ] = useForm({
        name: '',
        email: '',
        password: '',
        password2: ''
    });

    const { name, email, password, password2 } = FormValues;
    
    const handleRegister = (e) => {
        e.preventDefault();

        if( isValidForm() ) {
            dispatch( startRegisterWithEmailPasswordName( email, password, name ) );
        }

    };

    // useSelector tiene un callback con el state de los reducers. En este caso se retorna el ui. 
    const { msgError } = useSelector( state => state.ui );

    const dispatch = useDispatch();

    const isValidForm = () => {

        if( name.trim().length === 0 ) {
            dispatch( setError( 'Name is required' ) );
            return false;
        } else if ( !validator.isEmail( email ) ) {
            dispatch( setError( 'Email is not valid' ) );
            return false;
        } else if ( password !== password2 || password.length < 5 ) {
            dispatch( setError( 'Password is not valid' ) );
            return false;
        }

        // Si no hay más errores, los elimina.
        dispatch( removeError() );
        return true;
    };

    return (
    <>
        <h3 className='auth__title'>Register</h3>

        <form onSubmit={ handleRegister } >

            {
                msgError && 
                <div className='auth__alert-error'>
                    { msgError }
                </div>
            }

            <input
                type='text'
                placeholder='Name'
                name='name'
                className='auth__input'
                value={ name }
                onChange={ handleInputChange }
            />
        
            <input
                type='text'
                placeholder='Email'
                name='email'
                className='auth__input'
                value={ email }
                onChange={ handleInputChange }
            />

            <input
                type='password'
                placeholder='Password'
                name='password'
                className='auth__input'
                value={ password }
                onChange={ handleInputChange }
            />

            <input
                type='password'
                placeholder='Confirm Password'
                name='password2'
                className='auth__input'
                value={ password2 }
                onChange={ handleInputChange }
            />
            
            <button
                type='submit'
                className='btn btn-primary btn-block mb-5'
            >
                Register
            </button>

            <Link
                to='/auth/login'
                className='link'
            >
                Already registered?
            </Link>
        </form>

    </>
    );
};
