import React from 'react';
import { mount } from 'enzyme';
import { AppRouter } from '../../../components/09-useContext/AppRouter';
import { UserContext } from '../../../components/09-useContext/UserContext';

describe('Pruebas sobre <AppRouter />.', () => {
    const user = {
        name: 'Tomás',
        email: 'tomaspasto24@gmail.com'
    };
    
    const wrapper = mount( 
    <UserContext.Provider value={ { user } }>
        <AppRouter /> 
    </UserContext.Provider>
    );

    test('Debe de mostrarse correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });

});