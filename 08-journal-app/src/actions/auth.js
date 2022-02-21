import { firebase, googleAuthProvider } from '../firebase/firebase-config';
import { types } from "../types/types"
import { uiFinishLoading, uiStartLoading } from './ui';
import Swal from 'sweetalert2';
import { notesLogout } from './notes';

export const startLoginEmailPassword = ( email, password ) => {
    
    // Retorna una func con parámetro dispatch cuando es una acción async. Esto es gracias a thunk.
    return ( dispatch ) => {

        dispatch( uiStartLoading() );

        firebase.auth().signInWithEmailAndPassword( email, password )
            .then( ({ user }) => {

                dispatch( login( user.uid, user.displayName ) );
                dispatch( uiFinishLoading() );

            })
            .catch( ({ message }) => {

                dispatch( uiFinishLoading() );
                
                //Libreria de error.
                Swal.fire('Error', message, 'error');
            
            } );
        
    }
};

export const startRegisterWithEmailPasswordName = ( email, password, name) => {
    return ( dispatch ) => {
         
        firebase.auth().createUserWithEmailAndPassword( email, password ) 
            .then( async({ user }) => {

                // El displayName es null cuando se registra por email, asi que asignamos displayName con el name del usuario.
                await user.updateProfile({ displayName: name });

                dispatch( 
                    login( user.uid, user.displayName )
                )
            }) 
            .catch ( ({ message }) => {
                Swal.fire('Error', message, 'error');
            }); 

    }
};

export const startGoogleLogin = () => {
    return ( dispatch ) => {
        
        // En caso de resolverse la petición, se hace dispatch (login) con el uid y displayName extraidos del usuario.
        firebase.auth().signInWithPopup( googleAuthProvider )
            .then( ( {user} ) => {
                dispatch( login( user.uid, user.displayName ) )
            } );
    
    };

};

export const login = ( uid, displayName ) => ({
    
    type: types.login,
    
    payload: {
        uid,
        displayName
    }

});


export const startLogout = () => {
    
    return async( dispatch ) => {

        await firebase.auth().signOut();

        dispatch( logout() );

        dispatch( notesLogout() );
    };

};

export const logout = () => ({
    type: types.logout
})