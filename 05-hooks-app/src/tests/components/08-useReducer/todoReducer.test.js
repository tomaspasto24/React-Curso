import { todoReducer } from "../../../components/08-useReducer/todoReducer";
import { demoTodos } from "../../fixtures/demoTodos";

describe('Pruebas en todoReducer', () => {

    test('Debe de retornar el estado por defecto.', () => {
        
        const state = todoReducer(demoTodos, {});

        expect(state).toEqual(demoTodos);
    });

    test('Debe de agregar un todo', () => {
        const newTodo = {
            id:40,
            desc: 'Nuevo Todo',
            done: true
        };

        const action = {
            type: 'add',
            payload: newTodo
        }

        const state = todoReducer(demoTodos, action);

        expect( state.includes(newTodo) ).toBe(true);
    });

    test('Debe borrar un todo.', () => {

        const action = {
            type: 'delete',
            payload: 2
        }

        const state = todoReducer(demoTodos, action);

        expect( state.length ).toBe(1);
        expect( state[0].id ).toBe(1);

    });

    test('Debe de cambiar el toggle del todo.', () => {
        
        const action = {
            type: 'toggle',
            payload: 2
        }

        const state = todoReducer(demoTodos, action);

        expect( state.find(todo => todo.id === 2).done ).toBe(true);
    })

});