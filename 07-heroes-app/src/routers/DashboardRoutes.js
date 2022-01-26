import React from 'react';
import { Navbar } from '../components/ui/NavBar';
import { DCScreen } from '../components/dc/DcScreen';
import { MarvelScreen } from '../components/marvel/MarvelScreen';
import { SearchScreen } from '../components/search/SearchScreen';
import { Routes, Route } from 'react-router-dom';
import { HeroScreen } from '../components/hero/HeroScreen';

export const DashboardRoutes = () => {
  return (
      <>
        <Navbar />
        <Routes>
            <Route path="dc" element={ <DCScreen /> } />
            <Route path="marvel" element={ <MarvelScreen /> } />
            <Route path="search" element={ <SearchScreen /> } />
            <Route path="hero" element={ <HeroScreen /> } />
            <Route path="/" element={ <SearchScreen /> } />
        </Routes>
      </>
  )
  ;
};
