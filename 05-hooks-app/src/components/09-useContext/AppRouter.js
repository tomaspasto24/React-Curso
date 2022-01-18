import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Route,
    Routes,
} from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const AppRouter = () => {
    return (
        <Router>
          <div>

              <Routes>
                    
                    <Route exact path='/' element={ <HomeScreen /> } />
                    <Route path='/about' element={ <AboutScreen /> } />
                    <Route path='/login' element={ <LoginScreen /> } />

              </Routes>
          
          </div>  
        </Router>
    )
}
