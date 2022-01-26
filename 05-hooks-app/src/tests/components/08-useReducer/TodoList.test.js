import React from 'react';
import { shallow } from 'enzyme';
import { TodoList } from '../../../components/08-useReducer/TodoList';
import { demoTodos } from '../../fixtures/demoTodos';

describe('Pruebas en TodoList.', () => {

    const handleDelete = jest.fn();
    const handleToggle = jest.fn();

    const wrapper = shallow( <TodoList
        todos={demoTodos}
        handleDelete={ handleDelete }
        handleToggle={ handleToggle }
        /> );

    test('Debe de mostrarse correctamente.', () => {

        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe tener dos TodoListItem.', () => {

        expect( wrapper.find('TodoListItem').length ).toBe( demoTodos.length );
        //espera que la propiedad sea cualquier función 
        expect( wrapper.find('TodoListItem').at(0).prop('handleDelete') ).toEqual( expect.any(Function) );
    });

});