import React from 'react';
import { shallow } from 'enzyme';
import { TodoListItem } from '../../../components/08-useReducer/TodoListItem';
import { demoTodos } from '../../fixtures/demoTodos';
import '@testing-library/jest-dom';

describe('Pruebas en TodoListItem.', () => {

        const handleDelete = jest.fn();
        const handleToggle = jest.fn();
        const todo = demoTodos[0];
    
        const wrapper = shallow( <TodoListItem 
                                        todo={ todo } 
                                        index={1}
                                        handleDelete={ handleDelete }
                                        handleToggle={ handleToggle }
                                 />);
        
    test('Debe mostrarse correctamente.', () => {
        expect( wrapper ).toMatchSnapshot();
    });

    test('Debe de llamar a la función borrar.', () => {
        wrapper.find('button').simulate('click');

        expect( handleDelete ).toHaveBeenCalledWith(todo.id);
    });

    test('Debe de llamar a la función toggle.', () => {
        wrapper.find('p').simulate('click');

        expect( handleToggle ).toHaveBeenCalledWith(todo.id)
    });

    test('Debe de mostrar el texto correctamente.', () => {
        const textoP = wrapper.find('p').text();

        expect(textoP).toBe(`2. ${todo.desc}`);
    });

    test('Debe tener la clase complete si el done es true.', () => {
        const todo = demoTodos[0];
        todo.done = true;

        const wrapper = shallow( <TodoListItem 
            todo={ todo } 
            index={1}
            handleDelete={ handleDelete }
            handleToggle={ handleToggle }
            />);

        expect( wrapper.find('p').hasClass('complete') ).toBe(true);
    });

});