// Las acciones asíncronas se notan por un callback con el argumento dispatch.

import { type } from '@testing-library/user-event/dist/type';
import Swal from 'sweetalert2';
import { db } from "../firebase/firebase-config";
import { fileUpload } from '../helpers/fileUpload';
import { loadNotes } from "../helpers/loadNotes";
import { types } from "../types/types";

export const startNewNote = () => {
    // El segundo argumento getState() es una func que devuelve el state completo del store.
    return async( dispatch, getState ) => {
        const { uid } = getState().auth;
        
        const newNote = {
            title: '',
            body: '',
            date: new Date().getTime() 
        }

        const docRef = await db.collection(`${ uid }/journal/notes`).add( newNote );

        dispatch( activeNote( docRef.id, newNote ) );
        dispatch( addNewNote( docRef.id, newNote ) );
    }
}


export const addNewNote = ( id, note ) => ({
    type: types.notesAddNew,
    payload: {
        id, ...note
    }
});


export const activeNote = ( id, note ) => ({
    type: types.notesActive,
    payload: {
        id,
        ...note
    }
});


export const startLoadingNotes = ( uid ) => {
    return async( dispatch ) => {

        const notes = await loadNotes( uid );
    
        dispatch( setNotes(notes) );
    
    };
};

export const setNotes = ( notes ) => ({
    type: types.notesLoad,
    payload: notes
});

export const startSaveNote = ( note ) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        // Si note.url es undefined, elimina el campo url
        if ( !note.url ) {
            delete note.url;
        }
        

        const noteToFireStore = { ...note };

        delete noteToFireStore.id;

        await db.doc(`${ uid }/journal/notes/${ note.id }`).update( noteToFireStore );
        
        dispatch( refreshNote( note.id, noteToFireStore ) );
        Swal.fire('Saved', note.title, 'success');
    }
};

export const refreshNote = ( id, note ) => ({
    type: types.notesUpdated,
    payload: {
        id,
        note: {
            id,
            ...note
        }
    }
});


export const startUploading = ( file ) => {
    return async( dispatch, getState ) => {
        const { active } = getState().notes;

        Swal.fire({
            title: 'Uploading...',
            text: 'Please wait...',
            allowOutsideClick: false,
            showConfirmButton: false,
            willOpen: () => {
                Swal.showLoading();
            }
        });

        const fileUrl = await fileUpload( file );

        active.url = fileUrl;

        dispatch( startSaveNote( active ) )

        Swal.close();
    };
}


export const startDeleting = ( id ) => {
    return async( dispatch, getState ) => {

        const { uid } = getState().auth;

        db.doc(`${ uid }/journal/notes/${ id }`).delete();

        dispatch( deleteNote( id ) );

    }
}

export const deleteNote = ( id ) => ({
    type: types.notesDelete,
    payload: id
});

export const notesLogout = () => ({
    type: types.notesLogoutCleaning
});