import React, { useEffect, useReducer } from 'react';
import { AuthContext } from './auth/authContext';
import { authReducer } from './auth/authReducer';
import { AppRouter } from './routers/AppRouter';

const init = () => {
  return JSON.parse( localStorage.getItem('user') ) || { logged: false }
} 

export const HeroesApp = () => {

  // Se usa el useReducer del auth y se lo ingresa en el provider del contexto. Para que user y dispatch pueda ser usado
  // para en todos los componentes hijos de <AppRouter />.
  const [ user, dispatch] = useReducer( authReducer, {}, init)

  // Efecto que se ejecuta siempre que la variable user cambie, la guarda en el localstorage con el nombre user.
  useEffect( () => {
    if ( !user ) return;

    localStorage.setItem('user', JSON.stringify(user));
  }, [ user ])

  return (
    <AuthContext.Provider value={{
      user,
      dispatch
    }}>
      <AppRouter />
    </AuthContext.Provider>
  );
};
