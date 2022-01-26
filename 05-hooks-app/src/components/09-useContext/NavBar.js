import React from 'react';
import { NavLink } from 'react-router-dom';
import { AboutScreen } from './AboutScreen';
import { HomeScreen } from './HomeScreen';
import { LoginScreen } from './LoginScreen';

export const NavBar = () => {
    return (
        <>
            <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
                <div className="container-fluid">
                    <NavLink to='./' className="navbar-brand">useContext</NavLink>
                    <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
                    <div className="navbar-nav">
                        {/* activeClassName establece una clase si el URL coincide con el path. */}
                        <NavLink to='./' className="nav-link" aria-current="page">Home</NavLink>
                        <NavLink to='./About' className="nav-link">About</NavLink>
                        <NavLink to='./Login' className="nav-link">Login</NavLink>
                    </div>
                    </div>
                </div>
            </nav> 
        </>
    )
}
