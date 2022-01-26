import React from 'react';
import { mount } from 'enzyme';
import { HomeScreen } from '../../../components/09-useContext/HomeScreen';
import { UserContext } from '../../../components/09-useContext/UserContext';


describe('Pruebas en <HomeScreen />.', () => {
    const user = {
        name: 'Tomás',
        email: 'tomaspasto24@gmail.com'
    }

    // Se usa mount en vez de shallow porque mount renderiza todo, shallow solo el primer componente.
    const wrapper = mount(
        <UserContext.Provider value={{ user }}>
            <HomeScreen /> 
        </UserContext.Provider>
        ); 

    test('Debe de mostrarse correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });
});