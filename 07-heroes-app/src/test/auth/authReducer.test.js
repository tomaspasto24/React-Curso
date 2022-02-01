import { authReducer } from "../../auth/authReducer";
import { types } from "../../types/types";

describe('Pruebas en authReducer.', () => {

    test('Debe de retornar el estado por defecto.', () => {    
        const state = authReducer({ logged: false}, {});
        
        expect( state ).toEqual({ logged: false });
    });

    test('Debe de colocar y autenticar el name del usuario', () => {
        const action = {
            type: types.login,
            payload: {
                name: 'Tomás'
            }
        };

        // El estado inicial es logged: false.
        const state = authReducer({ logged: false }, action)
        
        expect( state ).toEqual({
            logged: true,
            name: 'Tomás'
        })
    });

    test('Debe de borrar el name del usuario y logged en false.', () => {
        const action = {
            type: types.logout,
        };
    
        const state = authReducer({ logged: true, name: 'Tomás'}, action);

        expect( state ).toEqual({ logged: false});
    });

});