import React from 'react';
import { shallow, mount } from 'enzyme';
import { TodoApp } from '../../../components/08-useReducer/TodoApp';
import { demoTodos } from '../../fixtures/demoTodos';
import { act } from '@testing-library/react';

describe('Pruebas en <TodoApp />.', () => {

    const wrapper = shallow(<TodoApp />);

    // Volvemos un mock a la función de setItem de Storage para saber si se ejecuta.
    Storage.prototype.setItem = jest.fn();

    test('Debe de mostrarse correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('Debe de agregar un TODO.', () => {
        //mount es igual a shallow, solo que habilita a usar act().
        const wrapper = mount(<TodoApp />);

        act( () => {
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);
            wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[1]);
        });

        expect( wrapper.find('h1').text() ).toBe('TodoApp ( 2 )');

        expect( Storage.prototype.setItem ).toHaveBeenCalledTimes(2);
    });

    test('Debe de eliminar un TODO.', () => {

        wrapper.find('TodoAdd').prop('handleAddTodo')(demoTodos[0]);    
        expect( wrapper.find('h1').text() ).toBe('TodoApp ( 1 )');
    
        wrapper.find('TodoList').prop('handleDelete')(demoTodos[0].id);
        expect( wrapper.find('h1').text() ).toBe('TodoApp ( 0 )');
    });

});