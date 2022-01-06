import '@testing-library/jest-dom';
import { shallow } from 'enzyme';
import React from 'react';
import { AddCategory } from '../../Components/AddCategory';

describe('Pruebas en <AddCategory />', () => {

    //Es una función para ser testeada.
    const setCategories = jest.fn();
    let wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    

    beforeEach( () => {
        jest.clearAllMocks();
        wrapper = shallow(<AddCategory setCategories={ setCategories } />);
    });

    test('Debe mostrarse correctamente', () => {

        expect(wrapper).toMatchSnapshot();

    });

    test('Debe de cambiar la caja de texto.', () => {

        const input = wrapper.find('input');
        const value = 'Hola mundo';
        
        //Se pasa como segundo argumento un objeto que es lo que simula el evento.
        input.simulate('change', { target: { value } } );

        expect( wrapper.find('p').text().trim() ).toBe(value);
    });

    test('No debe de postear la información con submit', () => {
         
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        expect( setCategories ).not.toHaveBeenCalled();

    });

    test('Debe de llamar al setCategories y limpiar la caja de texto', () => {
        
        //Prueba en InputChange
        const value = 'Prueba';
        wrapper.find('input').simulate('change', { target: { value } });

        expect( wrapper.find('input').props().value ).toBe(value);
        
        //Prueba en submit
        wrapper.find('form').simulate('submit', { preventDefault: () => {} });

        expect(setCategories).toHaveBeenCalled();
        expect( wrapper.find('input').prop('value') ).toBe('');

    });

});