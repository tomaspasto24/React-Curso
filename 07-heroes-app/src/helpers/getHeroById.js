import React from 'react';
import { heroes } from '../data/Heroes';

export const getHeroById = ( id ) => {

    console.log('getHeroById called');

    return heroes.find( heroe => heroe.id === id );
};
