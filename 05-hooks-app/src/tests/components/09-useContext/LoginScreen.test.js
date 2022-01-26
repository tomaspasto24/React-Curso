import React from 'react';
import { mount } from 'enzyme';
import { UserContext } from '../../../components/09-useContext/UserContext';
import { LoginScreen } from '../../../components/09-useContext/LoginScreen';

describe('Pruebas en <LoginScreen />.', () => {

    const setUser = jest.fn();
   
    const wrapper = mount(
        <UserContext.Provider value={
            {
                user: {},
                setUser: setUser
            }}>
            <LoginScreen />
        </UserContext.Provider>
    )

    test('Debe de mostrarse correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de ejecutar el setUser con el argumento esperado.', () => {
        wrapper.find('button').prop('onClick')();

        expect( setUser ).toHaveBeenCalled();
    });

});