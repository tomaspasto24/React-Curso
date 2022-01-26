import React from 'react';
import {shallow} from 'enzyme';
import { TodoAdd } from '../../../components/08-useReducer/TodoAdd';


describe('Pruebas en TodoAdd', () => {

    const handleAddTodo = jest.fn();
    
    const wrapper = shallow( <TodoAdd 
        handleAddTodo={handleAddTodo}
        />);

    test('Debe de mostrarse correctamente.', () => {
        expect(wrapper).toMatchSnapshot();
    });

    test('No debe de llamar handleAddTodo', () => {
        const formFunction = wrapper.find('form').prop('onSubmit');

        formFunction( { preventDefault(){} } );

        expect( handleAddTodo ).toHaveBeenCalledTimes(0);
    });

    test('Debe de llamar a la función handleAddTodo.', () => {

        const value = 'Aprender react';
        wrapper.find('input').simulate('change', {
            target: {
                value,
                name: 'description'
            }
        })

        const formFunction = wrapper.find('form').prop('onSubmit');

        formFunction( { preventDefault(){} } );

        expect( handleAddTodo ).toHaveBeenCalledTimes(1);
        expect( handleAddTodo ).toHaveBeenCalledWith({
            id: expect.any(Number),
            done: false,
            desc: value
        });

        expect( wrapper.find('input').prop('value') ).toBe('');
    });

});