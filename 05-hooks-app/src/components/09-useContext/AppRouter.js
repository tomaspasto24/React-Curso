import React from 'react';
import {
    BrowserRouter as Router,
    Route,
    Routes,
} from 'react-router-dom';
import { NavBar } from './NavBar';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
          <div>

              <NavBar />
            
              <div className='container'>
                <Routes>

                        {/* exact es para que sea la dirección exacta. 
                        element se ingresa el componente que tiene que ser renderizado. */}

                        <Route exact path='/' element={ <HomeScreen /> } />
                        <Route exact path='/about' element={ <AboutScreen /> } />
                        <Route exact path='/login' element={ <LoginScreen /> } />

                        {/* el path='*', se usa como por defecto. */}
                        <Route path='*' element={ <HomeScreen /> } />

                </Routes>
              </div>
          
          </div>  
        </Router>
    )
}
