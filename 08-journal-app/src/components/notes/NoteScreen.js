import React from 'react';
import { NotesAppBar } from './NotesAppBar';

export const NoteScreen = () => {
    return (
        <div className='notes_main-content'>

            <NotesAppBar />

            <div className='notes__content'>

                <input 
                    type='text'
                    placeholder='Some awesome title'
                    className='notes__title-input'
                />

                <textarea
                    placeholder='What happened today'
                    className='notes__textarea'
                >
                </textarea>

                <div className='notes__image'>
                    <img
                        src='https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQokWfzxEmv7y5mC6SEAWatM9hqoue3opXWPg&usqp=CAU'
                        alt='imagen'
                    />
                </div>

            </div>

        </div>
    );
};
