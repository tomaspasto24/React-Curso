import { removeError, setError, uiFinishLoading, uiStartLoading } from '../../actions/ui';
import { types } from '../../types/types';

describe('Pruebas sobre ui actions.', () => {

    test('Todas las acciones deben funcionar.', () => {

        const action = setError('Prueba');

        expect( action ).toEqual({
            type: types.uiSetError,
            payload: 'Prueba'
        });

        const removeErrorAction = removeError();

        expect( removeErrorAction ).toEqual({
            type: types.uiRemoveError,
        });

        const startLoadingAction = uiStartLoading();

        expect( startLoadingAction ).toEqual({
            type: types.uiStartLoading,
        });

        const finishLoading = uiFinishLoading();

        expect( finishLoading ).toEqual({
            type: types.uiFinishLoading,
        });

    });

});