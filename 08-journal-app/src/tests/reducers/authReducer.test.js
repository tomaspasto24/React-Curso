import { authReducer } from "../../reducers/authReducer";
import { types } from "../../types/types";

describe('Pruebas sobre authReducer.', () => {

    test('Debe ejecutar la acción login', () => {

        const action = {
            type: types.login,
            payload: {
                uid: 12,
                displayName: 'Tomás'
            }
        };

        const state = authReducer( {}, action );

        expect( state ).toEqual( {
            uid: 12,
            name: 'Tomás'
        } );

    });

    test('Debe ejecutar la acción logout', () => {
        const initialState = {
            uid: 12,
            name: 'Tomás'
        };

        const action = {
            type: types.logout
        };

        const state = authReducer(initialState, action);

        expect( state ).toEqual( {} );
    });

    test('Debe ejecutar la acción default', () => {
        const initialState = {
            uid: 12,
            name: 'Tomás'
        };

        const action = {};

        const state = authReducer(initialState, action);

        expect( state ).toEqual( initialState );
    });
});