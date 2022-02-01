import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useContext } from 'react/cjs/react.development';
import { AuthContext } from '../../auth/authContext';
import { types } from '../../types/types';

export const LoginScreen = () => {

  //CustomHook que sirve para navegar a otras vistas.
  const navigate = useNavigate();
  
  const { user, dispatch} = useContext(AuthContext);

  const handleLogin = () => {
    const action = {
      type: types.login,
      payload: { name: 'Tomás' }
    }

    dispatch(action);

    // Extrae del localStorage la ultima ubicacion visitada antes de salir de PrivateRoutes. En caso de no exitir, se guarda /marvel    
    const lastPath = localStorage.getItem('lastPath') || '/marvel';

    navigate(lastPath, {
      replace: true
    })
  }

  return (
    <div className='container mt-5'>
        <h1>Login Screen</h1>
        <hr />

        <button
          className='btn btn-primary'
          onClick={ handleLogin }
        >
          Login
        </button>
    </div>
  );
};