import React from 'react';
import { HeroList } from '../hero/HeroList';

export const MarvelScreen = () => {
  return (
  <>
    <h1>Marvel</h1>
    <HeroList publisher={'Marvel Comics'} />
  </>
    );
};
