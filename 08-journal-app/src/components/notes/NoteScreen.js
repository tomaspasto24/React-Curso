import React, { useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { activeNote, startDeleting } from '../../actions/notes';
import { useForm } from '../../hooks/useForm';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {

    const dispatch = useDispatch();

    const { active } = useSelector(state => state.notes);

    const [ values, handleInputChange, reset ] = useForm( active );

    const { title, body  } = values;

    // useRef toma la referencia al objeto por más que se redibuje la vista.
    const activeId = useRef( active.id );

    // Efecto con dependencia en active, cuando active cambia se resetea los valores que tiene el form.
    useEffect( () => {
        
        if (active.id !== activeId.current){
            reset( active );
            activeId.current = active.id;
        }
    
    }, [ active, reset ]);

    useEffect( () => {
        
        dispatch( activeNote( values.id, { ...values } ) );

    }, [ values, dispatch ]);

    const handleDelete = () => {
        dispatch( startDeleting( activeId.current ) )
    }

    return (
        <div className='notes_main-content'>

            <NotesAppBar />

            <div className='notes__content'>

                <input 
                    type='text'
                    placeholder='Some awesome title'
                    className='notes__title-input'
                    name='title'
                    value={ title }
                    onChange={ handleInputChange }
                />

                <textarea
                    placeholder='What happened today'
                    className='notes__textarea'
                    name='body'
                    value={ body }
                    onChange={ handleInputChange }
                >
                </textarea>

                {
                    ( active.url ) 
                    && (<div className='notes__image'>
                            <img
                                src={ active.url }
                                alt='imagen'
                            />
                        </div>)
                }

            </div>

            <button 
                className='btn btn-danger'
                onClick={ handleDelete }
            >
                Delete
            </button>

        </div>
    );
};
