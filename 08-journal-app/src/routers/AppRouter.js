import React, { useEffect } from 'react';
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

export const AppRouter = () => {

    const dispatch = useDispatch();
    
    // Es un efecto con una dependencia vacía por lo que solo se va a ejecutar una vez.(el dispatch es porque asi no queda como dependencia faltante).
    // Lo que hace es cargar el estado anterior, en caso de recargar el navegador. onAuthStateChanged siempre se va a estar ejecutando.
    useEffect( () => {
        firebase.auth().onAuthStateChanged( (user) => {

            if ( user?.uid ) {
                dispatch( login(user.uid, user.displayName) );
            }

        });
    }, [ dispatch ] );

    return (
        <Router>
            <div>
                <Switch>

                    <Route 
                        path='/auth' 
                        component={ AuthRouter } 
                    />
                    
                    <Route 
                        exact 
                        path='/' 
                        component={ JournalScreen } 
                    />

                    <Redirect
                        to='/auth/login'
                    />
                                    
                </Switch>
            </div>
        </Router>
    );
};
