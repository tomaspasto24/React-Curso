import React, { useEffect, useState } from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Redirect,
} from "react-router-dom";
import { JournalScreen } from '../components/journal/JournalScreen';
import { AuthRouter } from './AuthRouter';
import { firebase } from '../firebase/firebase-config';
import { useDispatch } from 'react-redux';
import { login } from '../actions/auth';
import { startLoadingNotes } from '../actions/notes';

export const AppRouter = () => {

    const dispatch = useDispatch();
    
    // La variable checking cambia a false cuando termina de cargar el efecto inicial del state. 
    const [ checking, setChecking ] = useState(true);

    // La variable loggedIn es true si el usuario esta logeado, false en caso contrario. Esto nos ayuda a manejar la ruta a la cual mandar al usuario.
    const [ loggedIn, setLoggedIn ] = useState(false);
    
    // Es un efecto con una dependencia vacía por lo que solo se va a ejecutar una vez.(el dispatch y setChecking es porque asi no queda como dependencia faltante).
    // Lo que hace es cargar el estado anterior, en caso de recargar el navegador. onAuthStateChanged siempre se va a estar ejecutando.
    useEffect( () => {
        firebase.auth().onAuthStateChanged( async(user) => {

            if ( user?.uid ) {
                dispatch( login(user.uid, user.displayName) );
                // En caso de que se logeé el usuario, se vuelve true.
                setLoggedIn(true);

                // Al ser el primer momento en el que se obtiene el id del usuario, extraemos las notas con la func loadNotes y despachamos la acción de cargar las notas para poder mostrarse.
                dispatch( startLoadingNotes(user.uid) );
            }
            else {
                // En caso contrario false.
                setLoggedIn(false);
            }


            setChecking(false);
        });
    }, [ dispatch, setChecking ] );

    // Si checking es true, devuelve un titulo que dice espere.
    if ( checking ) {
        return (
        <h1>Wait...</h1>
        );
    };

    return (
        <Router>
            <div>
                <Switch>
                    {
                        loggedIn 
                        ?
                        (
                            <>
                                <Route 
                                    exact 
                                    path='/' 
                                    component={ JournalScreen } 
                                />

                                <Redirect
                                    to='/' 
                                />
                            </>
                        )    
                        :
                        (
                            <>
                                <Route 
                                    path='/auth' 
                                    component={ AuthRouter } 
                                />

                                <Redirect
                                    to='/auth/login'
                                />
                            </>
                        )
                    }
                    

                    
                                    
                </Switch>
            </div>
        </Router>
    );
};
