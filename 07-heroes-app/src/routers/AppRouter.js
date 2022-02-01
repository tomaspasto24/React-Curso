import React from 'react';
import { Routes, Route, BrowserRouter } from 'react-router-dom';
import { LoginScreen } from '../components/login/LoginScreen';
import { DashboardRoutes } from './DashboardRoutes';
import { PrivateRoute } from './PrivateRoute';
import { PublicRoute } from './PublicRoute';

export const AppRouter = () => {
  return (
      <BrowserRouter>   
        <Routes>

            <Route path="/login" element={
              <PublicRoute>
                  <LoginScreen />
              </PublicRoute>
            } />
            
            {/* PrivateRoute se encarga de validar los datos de la variable user 
            para comrpobar si puede ver las rutas dentro de DashboardRoutes.
            Cuando se ingresa un componente dentro de otro, este termina ingresado en las props del componente padre.
            */}
            <Route path="/*" element={
              <PrivateRoute>
                 <DashboardRoutes />
              </PrivateRoute>
            } />

        </Routes>
      </BrowserRouter>
  );
};
